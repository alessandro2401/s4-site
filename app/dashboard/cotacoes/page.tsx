'use client';

import { useState, useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
  filtrarCotacoes,
  ordenarCotacoes,
  calcularEstatisticas,
  formatarReais,
  formatarPercentual,
  obterCorStatus,
  obterLabelStatus,
  obterNomeRegiao,
  type FiltrosCotacao,
  type OrdenacaoCotacao,
} from '@/lib/cotacoes';
import { Cotacao } from '@/lib/storage';
import {
  Search,
  Filter,
  Download,
  Eye,
  TrendingUp,
  Calendar,
  DollarSign,
  MapPin,
  ArrowUpDown,
  FileText,
  X,
} from 'lucide-react';

export default function CotacoesPage() {
  const { usuario } = useAuth();
  
  // Estados
  const [filtros, setFiltros] = useState<FiltrosCotacao>({
    status: 'todos',
    regiao: 'todas',
  });
  const [ordenacao, setOrdenacao] = useState<OrdenacaoCotacao>('data-desc');
  const [busca, setBusca] = useState('');
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [cotacaoSelecionada, setCotacaoSelecionada] = useState<Cotacao | null>(null);
  
  // Dados filtrados e ordenados
  const cotacoesFiltradas = useMemo(() => {
    const filtrosComBusca = { ...filtros, busca };
    const filtradas = filtrarCotacoes(filtrosComBusca);
    return ordenarCotacoes(filtradas, ordenacao);
  }, [filtros, busca, ordenacao]);
  
  // Estatísticas
  const stats = useMemo(() => 
    calcularEstatisticas(cotacoesFiltradas), 
    [cotacoesFiltradas]
  );
  
  // Handlers
  const handleFiltroChange = (campo: keyof FiltrosCotacao, valor: any) => {
    setFiltros(prev => ({ ...prev, [campo]: valor }));
  };
  
  const limparFiltros = () => {
    setFiltros({ status: 'todos', regiao: 'todas' });
    setBusca('');
  };
  
  const exportarCSV = () => {
    // Implementar na próxima fase
    alert('Exportação em desenvolvimento');
  };
  
  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Cotações</h1>
          <p className="text-gray-600 mt-1">
            Gerencie e analise todas as cotações realizadas
          </p>
        </div>
        <button
          onClick={exportarCSV}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          Exportar
        </button>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Total</span>
            <FileText className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          <p className="text-xs text-gray-500 mt-1">Cotações realizadas</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Conversão</span>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {formatarPercentual(stats.taxaConversao)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {stats.porStatus.apolice} apólices
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Valor Médio</span>
            <DollarSign className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {formatarReais(stats.valorMedioMensal)}
          </p>
          <p className="text-xs text-gray-500 mt-1">Prêmio mensal</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Potencial</span>
            <DollarSign className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {formatarReais(stats.valorTotalPotencial)}
          </p>
          <p className="text-xs text-gray-500 mt-1">Anual em apólices</p>
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
              placeholder="Buscar por CPF, nome, email ou telefone..."
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

            {(busca || filtros.status !== 'todos' || filtros.regiao !== 'todas' || 
              filtros.dataInicio || filtros.dataFim) && (
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
                <option value="cotacao">Cotação</option>
                <option value="proposta">Proposta</option>
                <option value="apolice">Apólice</option>
                <option value="cancelada">Cancelada</option>
              </select>
            </div>

            {/* Região */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Região
              </label>
              <select
                value={filtros.regiao || 'todas'}
                onChange={(e) => handleFiltroChange('regiao', e.target.value === 'todas' ? 'todas' : Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="todas">Todas</option>
                <option value="1">Região 1</option>
                <option value="2">Região 2</option>
                <option value="3">Região 3</option>
                <option value="4">Região 4</option>
                <option value="5">Região 5</option>
              </select>
            </div>

            {/* Data Início */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data Início
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
                Data Fim
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

      {/* Tabela de Cotações */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Veículo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Localização
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
              {cotacoesFiltradas.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                    <FileText className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p className="text-lg font-medium">Nenhuma cotação encontrada</p>
                    <p className="text-sm mt-1">
                      Tente ajustar os filtros ou realizar uma nova busca
                    </p>
                  </td>
                </tr>
              ) : (
                cotacoesFiltradas.map((cotacao) => (
                  <tr key={cotacao.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(cotacao.data).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {cotacao.dadosPessoais.nome}
                      </div>
                      <div className="text-sm text-gray-500">
                        {cotacao.dadosPessoais.cpf}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {cotacao.veiculo.marca} {cotacao.veiculo.modelo}
                      </div>
                      <div className="text-sm text-gray-500">
                        {cotacao.veiculo.ano}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {cotacao.localizacao.cidade}/{cotacao.localizacao.uf}
                      </div>
                      <div className="text-sm text-gray-500">
                        Região {cotacao.localizacao.regiao}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatarReais(cotacao.resultado.premioMensal)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          cotacao.status === 'apolice'
                            ? 'bg-green-100 text-green-800'
                            : cotacao.status === 'proposta'
                            ? 'bg-yellow-100 text-yellow-800'
                            : cotacao.status === 'cancelada'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {obterLabelStatus(cotacao.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() => setCotacaoSelecionada(cotacao)}
                        className="text-blue-600 hover:text-blue-900 transition-colors"
                        title="Ver detalhes"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rodapé com Total */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            Mostrando <strong>{cotacoesFiltradas.length}</strong> de{' '}
            <strong>{stats.total}</strong> cotações
          </span>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Ordenar por:</label>
            <select
              value={ordenacao}
              onChange={(e) => setOrdenacao(e.target.value as OrdenacaoCotacao)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="data-desc">Data (mais recente)</option>
              <option value="data-asc">Data (mais antiga)</option>
              <option value="valor-desc">Valor (maior)</option>
              <option value="valor-asc">Valor (menor)</option>
              <option value="nome-asc">Nome (A-Z)</option>
              <option value="nome-desc">Nome (Z-A)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Modal de Detalhes (simplificado por enquanto) */}
      {cotacaoSelecionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Detalhes da Cotação
                </h2>
                <button
                  onClick={() => setCotacaoSelecionada(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Cliente</h3>
                  <p className="text-lg font-semibold">{cotacaoSelecionada.dadosPessoais.nome}</p>
                  <p className="text-sm text-gray-600">{cotacaoSelecionada.dadosPessoais.cpf}</p>
                  <p className="text-sm text-gray-600">{cotacaoSelecionada.dadosPessoais.email}</p>
                  <p className="text-sm text-gray-600">{cotacaoSelecionada.dadosPessoais.telefone}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Veículo</h3>
                  <p className="text-lg font-semibold">
                    {cotacaoSelecionada.veiculo.marca} {cotacaoSelecionada.veiculo.modelo} {cotacaoSelecionada.veiculo.ano}
                  </p>
                  <p className="text-sm text-gray-600">
                    Valor FIPE: {formatarReais(cotacaoSelecionada.veiculo.valorFipe)}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Localização</h3>
                  <p className="text-sm text-gray-900">
                    {cotacaoSelecionada.localizacao.cidade}/{cotacaoSelecionada.localizacao.uf}
                  </p>
                  <p className="text-sm text-gray-600">
                    CEP: {cotacaoSelecionada.localizacao.cep}
                  </p>
                  <p className="text-sm text-gray-600">
                    {obterNomeRegiao(cotacaoSelecionada.localizacao.regiao)}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Valores</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {formatarReais(cotacaoSelecionada.resultado.premioMensal)}/mês
                  </p>
                  <p className="text-sm text-gray-600">
                    Anual: {formatarReais(cotacaoSelecionada.resultado.premioAnual)}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Status</h3>
                  <span
                    className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${
                      cotacaoSelecionada.status === 'apolice'
                        ? 'bg-green-100 text-green-800'
                        : cotacaoSelecionada.status === 'proposta'
                        ? 'bg-yellow-100 text-yellow-800'
                        : cotacaoSelecionada.status === 'cancelada'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {obterLabelStatus(cotacaoSelecionada.status)}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setCotacaoSelecionada(null)}
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

