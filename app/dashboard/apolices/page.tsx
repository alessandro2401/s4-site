'use client';

import { useState, useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
  filtrarApolices,
  ordenarApolices,
  calcularEstatisticasApolices,
  gerarAlertas,
  calcularDiasParaVencimento,
  obterCorStatus,
  obterLabelStatus,
  formatarPeriodoVigencia,
  obterDadosCompletosApolice,
  type FiltrosApolice,
  type OrdenacaoApolice,
} from '@/lib/apolices';
import { formatarReais } from '@/lib/cotacoes';
import { Apolice } from '@/lib/storage';
import {
  Search,
  Filter,
  Shield,
  AlertTriangle,
  Calendar,
  DollarSign,
  Eye,
  X,
  Bell,
  CheckCircle,
  XCircle,
  Clock,
} from 'lucide-react';

export default function ApolicesPage() {
  const { usuario } = useAuth();
  
  // Estados
  const [filtros, setFiltros] = useState<FiltrosApolice>({
    status: 'todos',
  });
  const [ordenacao, setOrdenacao] = useState<OrdenacaoApolice>('emissao-desc');
  const [busca, setBusca] = useState('');
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [apoliceSelecionada, setApoliceSelecionada] = useState<Apolice | null>(null);
  const [mostrarAlertas, setMostrarAlertas] = useState(true);
  
  // Dados filtrados e ordenados
  const apolicesFiltradas = useMemo(() => {
    const filtrosComBusca = { ...filtros, busca };
    const filtradas = filtrarApolices(filtrosComBusca);
    return ordenarApolices(filtradas, ordenacao);
  }, [filtros, busca, ordenacao]);
  
  // Estatísticas
  const stats = useMemo(() => 
    calcularEstatisticasApolices(apolicesFiltradas), 
    [apolicesFiltradas]
  );
  
  // Alertas
  const alertas = useMemo(() => gerarAlertas(apolicesFiltradas), [apolicesFiltradas]);
  
  // Handlers
  const handleFiltroChange = (campo: keyof FiltrosApolice, valor: any) => {
    setFiltros(prev => ({ ...prev, [campo]: valor }));
  };
  
  const limparFiltros = () => {
    setFiltros({ status: 'todos' });
    setBusca('');
  };
  
  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Apólices</h1>
          <p className="text-gray-600 mt-1">
            Gerencie apólices ativas, renovações e inadimplência
          </p>
        </div>
      </div>

      {/* Alertas */}
      {mostrarAlertas && alertas.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-yellow-600" />
              <h3 className="font-semibold text-yellow-900">
                {alertas.length} {alertas.length === 1 ? 'Alerta' : 'Alertas'}
              </h3>
            </div>
            <button
              onClick={() => setMostrarAlertas(false)}
              className="text-yellow-600 hover:text-yellow-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {alertas.slice(0, 5).map((alerta, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 text-sm p-2 rounded ${
                  alerta.prioridade === 'alta'
                    ? 'bg-red-50 text-red-800'
                    : alerta.prioridade === 'media'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-50 text-blue-800'
                }`}
              >
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{alerta.mensagem}</span>
              </div>
            ))}
          </div>
          {alertas.length > 5 && (
            <p className="text-xs text-yellow-700 mt-2">
              + {alertas.length - 5} alertas adicionais
            </p>
          )}
        </div>
      )}

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Ativas</span>
            <Shield className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.porStatus.ativa}</p>
          <p className="text-xs text-gray-500 mt-1">
            {formatarReais(stats.valorMensalTotal)}/mês
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Inadimplentes</span>
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.porStatus.inadimplente}</p>
          <p className="text-xs text-gray-500 mt-1">
            {stats.taxaInadimplencia.toFixed(1)}% do total
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Vencimentos</span>
            <Calendar className="w-5 h-5 text-orange-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.proximosVencimentos}</p>
          <p className="text-xs text-gray-500 mt-1">Próximos 30 dias</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Receita Anual</span>
            <DollarSign className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {formatarReais(stats.valorAnualTotal)}
          </p>
          <p className="text-xs text-gray-500 mt-1">Apólices ativas</p>
        </div>
      </div>

      {/* Barra de Busca e Filtros */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Busca */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por número, CPF ou nome..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Botões */}
          <div className="flex gap-2">
            <button
              onClick={() => setMostrarFiltros(!mostrarFiltros)}
              className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
                mostrarFiltros
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Filter className="w-4 h-4" />
              Filtros
            </button>

            {(busca || filtros.status !== 'todos' || filtros.dataInicio || filtros.dataFim) && (
              <button
                onClick={limparFiltros}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <X className="w-4 h-4" />
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Painel de Filtros */}
        {mostrarFiltros && (
          <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={filtros.status || 'todos'}
                onChange={(e) => handleFiltroChange('status', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="todos">Todos</option>
                <option value="ativa">Ativa</option>
                <option value="inadimplente">Inadimplente</option>
                <option value="vencida">Vencida</option>
                <option value="cancelada">Cancelada</option>
              </select>
            </div>

            {/* Vencimento Próximo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vencimento
              </label>
              <select
                value={filtros.vencimentoProximo || ''}
                onChange={(e) => handleFiltroChange('vencimentoProximo', e.target.value ? Number(e.target.value) : undefined)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Todos</option>
                <option value="7">Próximos 7 dias</option>
                <option value="15">Próximos 15 dias</option>
                <option value="30">Próximos 30 dias</option>
                <option value="60">Próximos 60 dias</option>
              </select>
            </div>

            {/* Data Início */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Emissão Início
              </label>
              <input
                type="date"
                value={filtros.dataInicio || ''}
                onChange={(e) => handleFiltroChange('dataInicio', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Data Fim */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Emissão Fim
              </label>
              <input
                type="date"
                value={filtros.dataFim || ''}
                onChange={(e) => handleFiltroChange('dataFim', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        )}
      </div>

      {/* Tabela de Apólices */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Número
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vigência
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vencimento
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor Mensal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {apolicesFiltradas.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                    <Shield className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p className="text-lg font-medium">Nenhuma apólice encontrada</p>
                    <p className="text-sm mt-1">
                      Tente ajustar os filtros ou realizar uma nova busca
                    </p>
                  </td>
                </tr>
              ) : (
                apolicesFiltradas.map((apolice) => {
                  const dados = obterDadosCompletosApolice(apolice);
                  const diasVencimento = dados.diasParaVencimento;
                  
                  return (
                    <tr key={apolice.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {apolice.numero}
                        </div>
                        <div className="text-xs text-gray-500">
                          Emitida em {new Date(apolice.dataEmissao).toLocaleDateString('pt-BR')}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {dados.cotacao?.dadosPessoais.nome || 'N/A'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {dados.cotacao?.dadosPessoais.cpf || 'N/A'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {new Date(apolice.dataInicio).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="text-sm text-gray-500">
                          até {new Date(apolice.dataFim).toLocaleDateString('pt-BR')}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {apolice.status === 'ativa' ? (
                          <div className="flex items-center gap-1">
                            <Clock className={`w-4 h-4 ${
                              diasVencimento <= 7 ? 'text-red-500' :
                              diasVencimento <= 30 ? 'text-orange-500' :
                              'text-gray-400'
                            }`} />
                            <span className={`text-sm font-medium ${
                              diasVencimento <= 7 ? 'text-red-600' :
                              diasVencimento <= 30 ? 'text-orange-600' :
                              'text-gray-600'
                            }`}>
                              {diasVencimento} dias
                            </span>
                          </div>
                        ) : (
                          <span className="text-sm text-gray-500">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {formatarReais(apolice.valorMensal)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            apolice.status === 'ativa'
                              ? 'bg-green-100 text-green-800'
                              : apolice.status === 'inadimplente'
                              ? 'bg-red-100 text-red-800'
                              : apolice.status === 'vencida'
                              ? 'bg-orange-100 text-orange-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {obterLabelStatus(apolice.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => setApoliceSelecionada(apolice)}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                          title="Ver detalhes"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rodapé com Total */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            Mostrando <strong>{apolicesFiltradas.length}</strong> de{' '}
            <strong>{stats.total}</strong> apólices
          </span>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Ordenar por:</label>
            <select
              value={ordenacao}
              onChange={(e) => setOrdenacao(e.target.value as OrdenacaoApolice)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="emissao-desc">Emissão (mais recente)</option>
              <option value="emissao-asc">Emissão (mais antiga)</option>
              <option value="vencimento-asc">Vencimento (mais próximo)</option>
              <option value="vencimento-desc">Vencimento (mais distante)</option>
              <option value="valor-desc">Valor (maior)</option>
              <option value="valor-asc">Valor (menor)</option>
              <option value="numero-asc">Número (A-Z)</option>
              <option value="numero-desc">Número (Z-A)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Modal de Detalhes */}
      {apoliceSelecionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Detalhes da Apólice
                </h2>
                <button
                  onClick={() => setApoliceSelecionada(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {(() => {
                const dados = obterDadosCompletosApolice(apoliceSelecionada);
                
                return (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Apólice</h3>
                      <p className="text-lg font-semibold">{apoliceSelecionada.numero}</p>
                      <p className="text-sm text-gray-600">
                        Emitida em {new Date(apoliceSelecionada.dataEmissao).toLocaleDateString('pt-BR')}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Cliente</h3>
                      <p className="text-lg font-semibold">{dados.cotacao?.dadosPessoais.nome || 'N/A'}</p>
                      <p className="text-sm text-gray-600">{dados.cotacao?.dadosPessoais.cpf || 'N/A'}</p>
                      <p className="text-sm text-gray-600">{dados.cotacao?.dadosPessoais.email || 'N/A'}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Vigência</h3>
                      <p className="text-sm text-gray-900">
                        {formatarPeriodoVigencia(apoliceSelecionada)}
                      </p>
                      {apoliceSelecionada.status === 'ativa' && (
                        <p className="text-sm text-gray-600 mt-1">
                          Vence em {dados.diasParaVencimento} dias
                        </p>
                      )}
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Valores</h3>
                      <p className="text-2xl font-bold text-blue-600">
                        {formatarReais(apoliceSelecionada.valorMensal)}/mês
                      </p>
                      <p className="text-sm text-gray-600">
                        Anual: {formatarReais(apoliceSelecionada.valorAnual)}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Status</h3>
                      <span
                        className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${
                          apoliceSelecionada.status === 'ativa'
                            ? 'bg-green-100 text-green-800'
                            : apoliceSelecionada.status === 'inadimplente'
                            ? 'bg-red-100 text-red-800'
                            : apoliceSelecionada.status === 'vencida'
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {obterLabelStatus(apoliceSelecionada.status)}
                      </span>
                    </div>
                  </div>
                );
              })()}

              <div className="mt-6 flex justify-end gap-2">
                <button
                  onClick={() => setApoliceSelecionada(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

