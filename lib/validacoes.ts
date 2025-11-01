/**
 * Biblioteca de Validações
 * ONDA 6: Preparação para APIs Externas
 * 
 * @module validacoes
 * @version 6.0.0
 */

// ============================================================================
// VALIDAÇÃO DE CPF
// ============================================================================

/**
 * Remove caracteres não numéricos de uma string
 */
export function removerCaracteresEspeciais(valor: string): string {
  return valor.replace(/\D/g, '');
}

/**
 * Valida formato de CPF (11 dígitos)
 */
export function validarFormatoCPF(cpf: string): boolean {
  const cpfLimpo = removerCaracteresEspeciais(cpf);
  return cpfLimpo.length === 11;
}

/**
 * Valida CPF com algoritmo de dígitos verificadores
 */
export function validarCPF(cpf: string): boolean {
  const cpfLimpo = removerCaracteresEspeciais(cpf);
  
  if (cpfLimpo.length !== 11) return false;
  
  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cpfLimpo)) return false;
  
  // Valida primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpfLimpo.charAt(i)) * (10 - i);
  }
  let resto = 11 - (soma % 11);
  let digitoVerificador1 = resto >= 10 ? 0 : resto;
  
  if (digitoVerificador1 !== parseInt(cpfLimpo.charAt(9))) return false;
  
  // Valida segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpfLimpo.charAt(i)) * (11 - i);
  }
  resto = 11 - (soma % 11);
  let digitoVerificador2 = resto >= 10 ? 0 : resto;
  
  return digitoVerificador2 === parseInt(cpfLimpo.charAt(10));
}

/**
 * Formata CPF para exibição (000.000.000-00)
 */
export function formatarCPF(cpf: string): string {
  const cpfLimpo = removerCaracteresEspeciais(cpf);
  if (cpfLimpo.length !== 11) return cpf;
  
  return cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

/**
 * Aplica máscara de CPF durante digitação
 */
export function aplicarMascaraCPF(valor: string): string {
  let cpfLimpo = removerCaracteresEspeciais(valor);
  
  // Limita a 11 dígitos
  cpfLimpo = cpfLimpo.substring(0, 11);
  
  // Aplica máscara progressivamente
  if (cpfLimpo.length <= 3) return cpfLimpo;
  if (cpfLimpo.length <= 6) return cpfLimpo.replace(/(\d{3})(\d{0,3})/, '$1.$2');
  if (cpfLimpo.length <= 9) return cpfLimpo.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
  return cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
}

// ============================================================================
// VALIDAÇÃO DE CNH
// ============================================================================

/**
 * Valida formato de CNH (11 dígitos)
 */
export function validarFormatoCNH(cnh: string): boolean {
  const cnhLimpa = removerCaracteresEspeciais(cnh);
  return cnhLimpa.length === 11;
}

/**
 * Valida CNH com algoritmo de dígitos verificadores
 */
export function validarCNH(cnh: string): boolean {
  const cnhLimpa = removerCaracteresEspeciais(cnh);
  
  if (cnhLimpa.length !== 11) return false;
  
  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cnhLimpa)) return false;
  
  // Valida primeiro dígito verificador
  let soma = 0;
  let multiplicador = 9;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cnhLimpa.charAt(i)) * multiplicador;
    multiplicador--;
  }
  
  let resto = soma % 11;
  let digitoVerificador1 = resto >= 10 ? 0 : resto;
  
  if (digitoVerificador1 !== parseInt(cnhLimpa.charAt(9))) return false;
  
  // Valida segundo dígito verificador
  soma = 0;
  multiplicador = 1;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cnhLimpa.charAt(i)) * multiplicador;
    multiplicador++;
  }
  
  resto = soma % 11;
  let digitoVerificador2 = resto >= 10 ? 0 : resto;
  
  return digitoVerificador2 === parseInt(cnhLimpa.charAt(10));
}

/**
 * Formata CNH para exibição (00000000000)
 */
export function formatarCNH(cnh: string): string {
  const cnhLimpa = removerCaracteresEspeciais(cnh);
  return cnhLimpa.substring(0, 11);
}

/**
 * Aplica máscara de CNH durante digitação
 */
export function aplicarMascaraCNH(valor: string): string {
  const cnhLimpa = removerCaracteresEspeciais(valor);
  return cnhLimpa.substring(0, 11);
}

// ============================================================================
// VALIDAÇÃO DE TELEFONE
// ============================================================================

/**
 * Valida formato de telefone celular (11 dígitos com DDD)
 */
export function validarTelefone(telefone: string): boolean {
  const telefoneLimpo = removerCaracteresEspeciais(telefone);
  
  // Celular: 11 dígitos (DDD + 9 + 8 dígitos)
  if (telefoneLimpo.length === 11) {
    const ddd = parseInt(telefoneLimpo.substring(0, 2));
    const primeiroDigito = parseInt(telefoneLimpo.charAt(2));
    
    // DDD válido (11 a 99)
    if (ddd < 11 || ddd > 99) return false;
    
    // Celular deve começar com 9
    return primeiroDigito === 9;
  }
  
  // Fixo: 10 dígitos (DDD + 8 dígitos)
  if (telefoneLimpo.length === 10) {
    const ddd = parseInt(telefoneLimpo.substring(0, 2));
    const primeiroDigito = parseInt(telefoneLimpo.charAt(2));
    
    // DDD válido (11 a 99)
    if (ddd < 11 || ddd > 99) return false;
    
    // Fixo não pode começar com 9
    return primeiroDigito !== 9;
  }
  
  return false;
}

/**
 * Formata telefone para exibição
 */
export function formatarTelefone(telefone: string): string {
  const telefoneLimpo = removerCaracteresEspeciais(telefone);
  
  if (telefoneLimpo.length === 11) {
    // Celular: (00) 90000-0000
    return telefoneLimpo.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  
  if (telefoneLimpo.length === 10) {
    // Fixo: (00) 0000-0000
    return telefoneLimpo.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  
  return telefone;
}

/**
 * Aplica máscara de telefone durante digitação
 */
export function aplicarMascaraTelefone(valor: string): string {
  let telefoneLimpo = removerCaracteresEspeciais(valor);
  
  // Limita a 11 dígitos
  telefoneLimpo = telefoneLimpo.substring(0, 11);
  
  // Aplica máscara progressivamente
  if (telefoneLimpo.length <= 2) return telefoneLimpo;
  if (telefoneLimpo.length <= 6) return telefoneLimpo.replace(/(\d{2})(\d{0,4})/, '($1) $2');
  if (telefoneLimpo.length <= 10) return telefoneLimpo.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  return telefoneLimpo.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
}

// ============================================================================
// VALIDAÇÃO DE EMAIL
// ============================================================================

/**
 * Valida formato de email
 */
export function validarEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ============================================================================
// VALIDAÇÃO DE PLACA DE VEÍCULO
// ============================================================================

/**
 * Valida formato de placa (Mercosul ou antiga)
 */
export function validarPlaca(placa: string): boolean {
  const placaLimpa = placa.toUpperCase().replace(/[^A-Z0-9]/g, '');
  
  // Placa Mercosul: ABC1D23
  const regexMercosul = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;
  
  // Placa antiga: ABC1234
  const regexAntiga = /^[A-Z]{3}[0-9]{4}$/;
  
  return regexMercosul.test(placaLimpa) || regexAntiga.test(placaLimpa);
}

/**
 * Formata placa para exibição (ABC-1234 ou ABC1D23)
 */
export function formatarPlaca(placa: string): string {
  const placaLimpa = placa.toUpperCase().replace(/[^A-Z0-9]/g, '');
  
  if (placaLimpa.length === 7) {
    // Verifica se é Mercosul (4º caractere é número)
    if (/^\d$/.test(placaLimpa.charAt(3))) {
      // Mercosul: ABC1D23
      return placaLimpa;
    } else {
      // Antiga: ABC-1234
      return placaLimpa.replace(/([A-Z]{3})([0-9]{4})/, '$1-$2');
    }
  }
  
  return placa;
}

/**
 * Aplica máscara de placa durante digitação
 */
export function aplicarMascaraPlaca(valor: string): string {
  let placaLimpa = valor.toUpperCase().replace(/[^A-Z0-9]/g, '');
  
  // Limita a 7 caracteres
  placaLimpa = placaLimpa.substring(0, 7);
  
  return placaLimpa;
}

// ============================================================================
// VALIDAÇÃO DE CÓDIGO DE RASTREADOR
// ============================================================================

/**
 * Valida formato de código de rastreador (varia por empresa)
 */
export function validarCodigoRastreador(codigo: string, empresa: string): boolean {
  const codigoLimpo = removerCaracteresEspeciais(codigo);
  
  switch (empresa.toLowerCase()) {
    case 'ituran':
      // Ituran: 10 dígitos
      return codigoLimpo.length === 10;
    
    case 'tracker':
      // Tracker: 12 dígitos
      return codigoLimpo.length === 12;
    
    case 'onixsat':
      // Onixsat: 8 dígitos
      return codigoLimpo.length === 8;
    
    case 'autotrac':
      // Autotrac: 11 dígitos
      return codigoLimpo.length === 11;
    
    default:
      // Genérico: entre 8 e 15 dígitos
      return codigoLimpo.length >= 8 && codigoLimpo.length <= 15;
  }
}

/**
 * Formata código de rastreador para exibição
 */
export function formatarCodigoRastreador(codigo: string): string {
  const codigoLimpo = removerCaracteresEspeciais(codigo);
  return codigoLimpo;
}

// ============================================================================
// UTILITÁRIOS GERAIS
// ============================================================================

/**
 * Valida se uma data é válida
 */
export function validarData(data: string): boolean {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regex.test(data)) return false;
  
  const [dia, mes, ano] = data.split('/').map(Number);
  const dataObj = new Date(ano, mes - 1, dia);
  
  return (
    dataObj.getFullYear() === ano &&
    dataObj.getMonth() === mes - 1 &&
    dataObj.getDate() === dia
  );
}

/**
 * Formata data para exibição (DD/MM/AAAA)
 */
export function formatarData(data: Date): string {
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

/**
 * Calcula idade a partir de uma data de nascimento
 */
export function calcularIdade(dataNascimento: Date): number {
  const hoje = new Date();
  let idade = hoje.getFullYear() - dataNascimento.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNascimento = dataNascimento.getMonth();
  
  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < dataNascimento.getDate())) {
    idade--;
  }
  
  return idade;
}

/**
 * Valida se uma string contém apenas letras
 */
export function validarApenasLetras(texto: string): boolean {
  const regex = /^[A-Za-zÀ-ÿ\s]+$/;
  return regex.test(texto);
}

/**
 * Valida se uma string contém apenas números
 */
export function validarApenasNumeros(texto: string): boolean {
  const regex = /^\d+$/;
  return regex.test(texto);
}

/**
 * Capitaliza primeira letra de cada palavra
 */
export function capitalizarNome(nome: string): string {
  return nome
    .toLowerCase()
    .split(' ')
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(' ');
}

