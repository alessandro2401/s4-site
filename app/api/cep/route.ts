import { NextRequest, NextResponse } from 'next/server';

const VIACEP_BASE_URL = 'https://viacep.com.br/ws';

/**
 * API Route para consulta de CEP via ViaCEP
 * 
 * Endpoints:
 * GET /api/cep?cep=01001000 - Consulta um CEP específico
 * GET /api/cep?uf=SP&cidade=SaoPaulo&logradouro=Paulista - Pesquisa por endereço
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  // Consulta por CEP
  const cep = searchParams.get('cep');
  if (cep) {
    return consultarCEP(cep);
  }
  
  // Pesquisa por endereço
  const uf = searchParams.get('uf');
  const cidade = searchParams.get('cidade');
  const logradouro = searchParams.get('logradouro');
  
  if (uf && cidade && logradouro) {
    return pesquisarEndereco(uf, cidade, logradouro);
  }
  
  return NextResponse.json(
    { error: 'Parâmetros inválidos. Use ?cep=01001000 ou ?uf=SP&cidade=SaoPaulo&logradouro=Paulista' },
    { status: 400 }
  );
}

/**
 * Consulta um CEP específico
 */
async function consultarCEP(cep: string) {
  // Remove caracteres não numéricos
  const cepLimpo = cep.replace(/\D/g, '');
  
  // Valida formato (8 dígitos)
  if (cepLimpo.length !== 8 || !/^\d+$/.test(cepLimpo)) {
    return NextResponse.json(
      { error: 'CEP inválido. Deve conter 8 dígitos numéricos.' },
      { status: 400 }
    );
  }
  
  try {
    const response = await fetch(`${VIACEP_BASE_URL}/${cepLimpo}/json/`, {
      next: { revalidate: 86400 } // Cache por 24 horas
    });
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Erro ao consultar CEP' },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    
    // Verifica se o CEP foi encontrado
    if (data.erro === 'true' || data.erro === true) {
      return NextResponse.json(
        { error: 'CEP não encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro ao consultar ViaCEP:', error);
    return NextResponse.json(
      { error: 'Erro de conexão com o serviço de CEP' },
      { status: 500 }
    );
  }
}

/**
 * Pesquisa CEPs por endereço
 */
async function pesquisarEndereco(uf: string, cidade: string, logradouro: string) {
  // Validações básicas
  if (cidade.length < 3 || logradouro.length < 3) {
    return NextResponse.json(
      { error: 'Cidade e logradouro devem ter no mínimo 3 caracteres' },
      { status: 400 }
    );
  }
  
  try {
    const response = await fetch(
      `${VIACEP_BASE_URL}/${uf}/${encodeURIComponent(cidade)}/${encodeURIComponent(logradouro)}/json/`,
      {
        next: { revalidate: 86400 } // Cache por 24 horas
      }
    );
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Erro ao pesquisar endereço' },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    
    // Verifica se encontrou resultados
    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json(
        { error: 'Nenhum endereço encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro ao pesquisar ViaCEP:', error);
    return NextResponse.json(
      { error: 'Erro de conexão com o serviço de CEP' },
      { status: 500 }
    );
  }
}
