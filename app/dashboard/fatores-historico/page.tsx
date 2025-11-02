'use client';

import { useState } from 'react';
import { formatarValorComUnidade, type AlteracaoFator } from '@/lib/fatores';

// Dados de exemplo (em produção viriam do banco de dados)
const ALTERACOES_EXEMPLO: AlteracaoFator[] = [
  {
    id: '1',
    fatorId: 'taxa_base',
    nomeFator: 'Taxa Base',
    valorAnterior: 3.0,
    valorNovo: 3.5,
    usuario: 'admin@aura.com.br',
    data: new Date('2025-11-01T10:30:00'),
    status: 'aprovado',
    aprovadoPor: 'master@aura.com.br',
    dataAprovacao: new Date('2025-11-01T14:20:00'),
    justificativa: 'Ajuste para melhorar competitividade',
    comentarios: 'Aprovado após análise de mercado'
  },
  {
    id: '2',
    fatorId: 'idade_condutor_18_25',
    nomeFator: 'Condutor 18-25 anos',
    valorAnterior: 11.0,
    valorNovo: 12.0,
    usuario: 'admin@aura.com.br',
    data: new Date('2025-10-28T09:15:00'),
    status: 'pendente',
    justificativa: 'Aumento da sinistralidade nesta faixa etária'
  },
  {
    id: '3',
    fatorId: 'desconto_rastreador',
    nomeFator: 'Desconto Rastreador',
    valorAnterior: -5.0,
    valorNovo: -7.0,
    usuario: 'comercial@aura.com.br',
    data: new Date('2025-10-25T16:45:00'),
    status: 'rejeitado',
    aprovadoPor: 'master@aura.com.br',
    dataAprovacao: new Date('2025-10-26T10:00:00'),
    justificativa: 'Incentivo para instalação de rastreadores',
    comentarios: 'Desconto muito alto, impacta margem'
  }
];

export default function FatoresHistoricoPage() {
  const [alteracoes] = useState<AlteracaoFator[]>(ALTERACOES_EXEMPLO);
  const [filtroStatus, setFiltroStatus] = useState<string>('todos');

  const alteracoesFiltradas = alteracoes.filter(alt => {
    if (filtroStatus === 'todos') return true;
    return alt.status === filtroStatus;
  });

  const getStatusColor = (status: string) => {
    const cores = {
      pendente: 'bg-yellow-100 text-yellow-800',
      aprovado: 'bg-green-100 text-green-800',
      rejeitado: 'bg-red-100 text-red-800'
    };
    return cores[status as keyof typeof cores] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status: string) => {
    const icones = {
      pendente: '⏳',
      aprovado: '✅',
      rejeitado: '❌'
    };
    return icones[status as keyof typeof icones] || '❓';
  };

  const formatarData = (data: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(data);
  };

  const calcularVariacao = (anterior: number, novo: number) => {
    const variacao = ((novo - anterior) / Math.abs(anterior)) * 100;
    return variacao;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Cabeçalho */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Histórico de Alterações</h1>
        <p className="text-gray-600 mt-1">Acompanhe todas as modificações nos fatores de precificação</p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-2xl font-bold text-gray-900">{alteracoes.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📋</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pendentes</p>
              <p className="text-2xl font-bold text-yellow-600">
                {alteracoes.filter(a => a.status === 'pendente').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⏳</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Aprovadas</p>
              <p className="text-2xl font-bold text-green-600">
                {alteracoes.filter(a => a.status === 'aprovado').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Rejeitadas</p>
              <p className="text-2xl font-bold text-red-600">
                {alteracoes.filter(a => a.status === 'rejeitado').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">❌</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={filtroStatus}
              onChange={(e) => setFiltroStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="todos">Todos os Status</option>
              <option value="pendente">Pendentes</option>
              <option value="aprovado">Aprovadas</option>
              <option value="rejeitado">Rejeitadas</option>
            </select>
          </div>
        </div>
      </div>

      {/* Timeline de Alterações */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Timeline de Alterações</h2>
          
          {alteracoesFiltradas.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Nenhuma alteração encontrada</p>
            </div>
          ) : (
            <div className="space-y-6">
              {alteracoesFiltradas.map((alteracao, index) => {
                const variacao = calcularVariacao(alteracao.valorAnterior, alteracao.valorNovo);
                const isAumento = variacao > 0;

                return (
                  <div key={alteracao.id} className="relative">
                    {/* Linha vertical */}
                    {index < alteracoesFiltradas.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200" />
                    )}

                    {/* Card da Alteração */}
                    <div className="flex gap-4">
                      {/* Ícone */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl relative z-10">
                          {getStatusIcon(alteracao.status)}
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">{alteracao.nomeFator}</h3>
                            <p className="text-sm text-gray-600">
                              Por {alteracao.usuario} • {formatarData(alteracao.data)}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(alteracao.status)}`}>
                            {alteracao.status.charAt(0).toUpperCase() + alteracao.status.slice(1)}
                          </span>
                        </div>

                        {/* Valores */}
                        <div className="grid grid-cols-3 gap-4 mb-3">
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Valor Anterior</p>
                            <p className="text-lg font-semibold text-gray-700">
                              {formatarValorComUnidade(alteracao.valorAnterior, '%')}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Valor Novo</p>
                            <p className="text-lg font-semibold text-blue-600">
                              {formatarValorComUnidade(alteracao.valorNovo, '%')}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Variação</p>
                            <p className={`text-lg font-semibold ${isAumento ? 'text-red-600' : 'text-green-600'}`}>
                              {isAumento ? '+' : ''}{variacao.toFixed(2)}%
                            </p>
                          </div>
                        </div>

                        {/* Justificativa */}
                        {alteracao.justificativa && (
                          <div className="mb-3">
                            <p className="text-xs text-gray-600 mb-1">Justificativa</p>
                            <p className="text-sm text-gray-900">{alteracao.justificativa}</p>
                          </div>
                        )}

                        {/* Aprovação/Rejeição */}
                        {alteracao.status !== 'pendente' && (
                          <div className="border-t border-gray-200 pt-3 mt-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-gray-600">
                                  {alteracao.status === 'aprovado' ? 'Aprovado' : 'Rejeitado'} por {alteracao.aprovadoPor}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {alteracao.dataAprovacao && formatarData(alteracao.dataAprovacao)}
                                </p>
                              </div>
                            </div>
                            {alteracao.comentarios && (
                              <p className="text-sm text-gray-700 mt-2">
                                <span className="font-medium">Comentário:</span> {alteracao.comentarios}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Ações para pendentes */}
                        {alteracao.status === 'pendente' && (
                          <div className="flex gap-2 mt-3 pt-3 border-t border-gray-200">
                            <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                              Aprovar
                            </button>
                            <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                              Rejeitar
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

