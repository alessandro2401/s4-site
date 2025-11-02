/**
 * Biblioteca de Exportação
 * ONDA 8.2: Painel de Cotações
 * 
 * Funções para exportar dados para Excel e PDF
 * 
 * @module exportacao
 * @version 8.2.0
 */

import { Cotacao } from './storage';
import { formatarReais, prepararDadosExcel, exportarParaCSV } from './cotacoes';

// ============================================================================
// EXPORTAÇÃO EXCEL (via CSV)
// ============================================================================

/**
 * Exporta cotações para arquivo Excel (CSV)
 */
export function exportarCotacoesExcel(cotacoes: Cotacao[], nomeArquivo?: string): void {
  const csv = exportarParaCSV(cotacoes);
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  
  const nome = nomeArquivo || `cotacoes_${new Date().toISOString().split('T')[0]}.csv`;
  baixarArquivo(blob, nome);
}

/**
 * Exporta cotações para arquivo Excel (formato XLSX usando biblioteca)
 * Nota: Requer biblioteca externa como xlsx ou exceljs
 */
export async function exportarCotacoesXLSX(cotacoes: Cotacao[], nomeArquivo?: string): Promise<void> {
  // Preparar dados
  const dados = prepararDadosExcel(cotacoes);
  
  // Criar workbook manualmente (sem biblioteca externa por enquanto)
  // Em produção, usar biblioteca como 'xlsx' ou 'exceljs'
  const csv = exportarParaCSV(cotacoes);
  const blob = new Blob(['\uFEFF' + csv], { type: 'application/vnd.ms-excel' });
  
  const nome = nomeArquivo || `cotacoes_${new Date().toISOString().split('T')[0]}.xlsx`;
  baixarArquivo(blob, nome);
}

// ============================================================================
// EXPORTAÇÃO PDF
// ============================================================================

/**
 * Exporta cotações para PDF
 */
export function exportarCotacoesPDF(cotacoes: Cotacao[], nomeArquivo?: string): void {
  // Cria HTML para impressão
  const html = gerarHTMLRelatorio(cotacoes);
  
  // Abre em nova janela para impressão
  const janela = window.open('', '_blank');
  if (janela) {
    janela.document.write(html);
    janela.document.close();
    
    // Aguarda carregar e imprime
    janela.onload = () => {
      janela.print();
    };
  }
}

/**
 * Gera HTML formatado para relatório de cotações
 */
function gerarHTMLRelatorio(cotacoes: Cotacao[]): string {
  const dataGeracao = new Date().toLocaleString('pt-BR');
  
  const linhas = cotacoes.map((c, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${new Date(c.data).toLocaleDateString('pt-BR')}</td>
      <td>${c.dadosPessoais.nome}</td>
      <td>${c.dadosPessoais.cpf}</td>
      <td>${c.veiculo.marca} ${c.veiculo.modelo} ${c.veiculo.ano}</td>
      <td>${c.localizacao.cidade}/${c.localizacao.uf}</td>
      <td>${formatarReais(c.resultado.premioMensal)}</td>
      <td>${formatarReais(c.resultado.premioAnual)}</td>
      <td><span class="status status-${c.status}">${c.status.toUpperCase()}</span></td>
    </tr>
  `).join('');
  
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Relatório de Cotações</title>
      <style>
        @page {
          size: A4 landscape;
          margin: 1cm;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Arial, sans-serif;
          font-size: 10pt;
          color: #333;
        }
        
        .header {
          text-align: center;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #667eea;
        }
        
        .header h1 {
          color: #667eea;
          font-size: 24pt;
          margin-bottom: 5px;
        }
        
        .header p {
          color: #666;
          font-size: 10pt;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }
        
        th {
          background-color: #667eea;
          color: white;
          padding: 8px;
          text-align: left;
          font-size: 9pt;
          font-weight: 600;
        }
        
        td {
          padding: 6px 8px;
          border-bottom: 1px solid #e0e0e0;
          font-size: 9pt;
        }
        
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        
        .status {
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 8pt;
          font-weight: 600;
        }
        
        .status-cotacao {
          background-color: #dbeafe;
          color: #1e40af;
        }
        
        .status-proposta {
          background-color: #fef3c7;
          color: #92400e;
        }
        
        .status-apolice {
          background-color: #d1fae5;
          color: #065f46;
        }
        
        .status-cancelada {
          background-color: #fee2e2;
          color: #991b1b;
        }
        
        .footer {
          margin-top: 20px;
          padding-top: 10px;
          border-top: 1px solid #e0e0e0;
          text-align: center;
          font-size: 8pt;
          color: #999;
        }
        
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Relatório de Cotações</h1>
        <p>S4 Seguros - Administradora Mutual</p>
        <p>Gerado em: ${dataGeracao}</p>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
            <th>Cliente</th>
            <th>CPF</th>
            <th>Veículo</th>
            <th>Localização</th>
            <th>Prêmio Mensal</th>
            <th>Prêmio Anual</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${linhas}
        </tbody>
      </table>
      
      <div class="footer">
        <p>Total de cotações: ${cotacoes.length}</p>
        <p>© ${new Date().getFullYear()} S4 Seguros - Todos os direitos reservados</p>
      </div>
    </body>
    </html>
  `;
}

// ============================================================================
// FUNÇÕES AUXILIARES
// ============================================================================

/**
 * Baixa arquivo no navegador
 */
function baixarArquivo(blob: Blob, nomeArquivo: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = nomeArquivo;
  link.style.display = 'none';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Libera memória
  setTimeout(() => URL.revokeObjectURL(url), 100);
}

/**
 * Copia dados para área de transferência
 */
export async function copiarParaAreaTransferencia(texto: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch (error) {
    console.error('Erro ao copiar para área de transferência:', error);
    return false;
  }
}

/**
 * Exporta dados resumidos (para compartilhamento rápido)
 */
export function exportarResumo(cotacoes: Cotacao[]): string {
  const total = cotacoes.length;
  const apolices = cotacoes.filter(c => c.status === 'apolice').length;
  const taxaConversao = total > 0 ? ((apolices / total) * 100).toFixed(1) : '0.0';
  
  const valorTotal = cotacoes
    .filter(c => c.status === 'apolice')
    .reduce((acc, c) => acc + c.resultado.premioAnual, 0);
  
  return `
📊 Resumo de Cotações - S4 Seguros

Total de cotações: ${total}
Apólices emitidas: ${apolices}
Taxa de conversão: ${taxaConversao}%
Valor total anual: ${formatarReais(valorTotal)}

Gerado em: ${new Date().toLocaleString('pt-BR')}
  `.trim();
}

