'use client';

import { useState, useMemo } from 'react';
import {
  agruparFatoresPorCategoria,
  validarValorFator,
  formatarValorComUnidade,
  getCorImpacto,
  getLabelImpacto,
  getEstatisticasFatores,
  resetarTodosFatores,
  exportarConfiguracao,
  importarConfiguracao,
  simularImpactoAlteracao,
  type FatorConfig,
  type GrupoFatores
} from '@/lib/fatores';

export default function FatoresPage() {
  const [gruposFatores, setGruposFatores] = useState<GrupoFatores[]>(agruparFatoresPorCategoria());
  const [fatorSelecionado, setFatorSelecionado] = useState<FatorConfig | null>(null);
  const [valorTemp, setValorTemp] = useState<number>(0);
  const [mostrarSimulacao, setMostrarSimulacao] = useState(false);
  const [filtroCategoria, setFiltroCategoria] = useState<string>('todas');
  const [filtroImpacto, setFiltroImpacto] = useState<string>('todos');

  const estatisticas = useMemo(() => getEstatisticasFatores(), [gruposFatores]);

  const gruposFiltrados = useMemo(() => {
    return gruposFatores
      .map(grupo => ({
        ...grupo,
        fatores: grupo.fatores.filter(fator => {
          const matchCategoria = filtroCategoria === 'todas' || fator.categoria === filtroCategoria;
          const matchImpacto = filtroImpacto === 'todos' || fator.impacto === filtroImpacto;
          return matchCategoria && matchImpacto;
        })
      }))
      .filter(grupo => grupo.fatores.length > 0);
  }, [gruposFatores, filtroCategoria, filtroImpacto]);

  const handleSelecionarFator = (fator: FatorConfig) => {
    setFatorSelecionado(fator);
    setValorTemp(fator.valorAtual);
    setMostrarSimulacao(false);
  };

  const handleAlterarValor = (valor: number) => {
    setValorTemp(valor);
    if (fatorSelecionado) {
      const validacao = validarValorFator(fatorSelecionado, valor);
      if (validacao.valido) {
        setMostrarSimulacao(true);
      }
    }
  };

  const handleAplicarAlteracao = () => {
    if (!fatorSelecionado) return;

    const validacao = validarValorFator(fatorSelecionado, valorTemp);
    if (!validacao.valido) {
      alert(validacao.erro);
      return;
    }

    // Atualizar valor
    fatorSelecionado.valorAtual = valorTemp;
    setGruposFatores([...agruparFatoresPorCategoria()]);
    setMostrarSimulacao(false);
    alert('Fator atualizado com sucesso!');
  };

  const handleResetarTodos = () => {
    if (confirm('Tem certeza que deseja resetar todos os fatores para os valores padrão?')) {
      resetarTodosFatores();
      setGruposFatores([...agruparFatoresPorCategoria()]);
      setFatorSelecionado(null);
      alert('Todos os fatores foram resetados!');
    }
  };

  const handleExportar = () => {
    const config = exportarConfiguracao();
    const blob = new Blob([config], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fatores-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportar = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const json = event.target?.result as string;
          const resultado = importarConfiguracao(json);
          if (resultado.sucesso) {
            setGruposFatores([...agruparFatoresPorCategoria()]);
            alert(`${resultado.fatoresImportados} fatores importados com sucesso!`);
          } else {
            alert(`Erro ao importar: ${resultado.erro}`);
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const simulacao = useMemo(() => {
    if (!fatorSelecionado || !mostrarSimulacao) return null;
    return simularImpactoAlteracao(fatorSelecionado.id, valorTemp, 0, 0);
  }, [fatorSelecionado, valorTemp, mostrarSimulacao]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Cabeçalho */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Ajuste de Fatores</h1>
            <p className="text-gray-600 mt-1">Gerencie os fatores de precificação do seguro</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleExportar}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <span>📥</span>
              Exportar
            </button>
            <button
              onClick={handleImportar}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <span>📤</span>
              Importar
            </button>
            <button
              onClick={handleResetarTodos}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <span>🔄</span>
              Resetar Todos
            </button>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total de Fatores</p>
              <p className="text-2xl font-bold text-gray-900">{estatisticas.total}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎛️</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Modificados</p>
              <p className="text-2xl font-bold text-orange-600">{estatisticas.modificados}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✏️</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Padrão</p>
              <p className="text-2xl font-bold text-green-600">{estatisticas.padrao}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Alto Impacto</p>
              <p className="text-2xl font-bold text-red-600">{estatisticas.porImpacto.alto}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categoria
            </label>
            <select
              value={filtroCategoria}
              onChange={(e) => setFiltroCategoria(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="todas">Todas as Categorias</option>
              <option value="veiculo">Fatores de Veículo</option>
              <option value="condutor">Fatores de Condutor</option>
              <option value="uso">Fatores de Uso</option>
              <option value="cobertura">Fatores de Cobertura</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Impacto
            </label>
            <select
              value={filtroImpacto}
              onChange={(e) => setFiltroImpacto(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="todos">Todos os Impactos</option>
              <option value="alto">Alto Impacto</option>
              <option value="medio">Médio Impacto</option>
              <option value="baixo">Baixo Impacto</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de Fatores */}
        <div className="lg:col-span-2 space-y-6">
          {gruposFiltrados.map((grupo) => (
            <div key={grupo.categoria} className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">{grupo.nome}</h2>
                <p className="text-sm text-gray-600">{grupo.descricao}</p>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {grupo.fatores.map((fator) => {
                    const isModificado = fator.valorAtual !== fator.valorPadrao;
                    const isSelecionado = fatorSelecionado?.id === fator.id;

                    return (
                      <div
                        key={fator.id}
                        onClick={() => handleSelecionarFator(fator)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          isSelecionado
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-gray-900">{fator.nome}</h3>
                              {isModificado && (
                                <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">
                                  Modificado
                                </span>
                              )}
                              <span
                                className="px-2 py-0.5 text-xs rounded-full text-white"
                                style={{ backgroundColor: getCorImpacto(fator.impacto) }}
                              >
                                {getLabelImpacto(fator.impacto)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{fator.descricao}</p>
                          </div>
                          <div className="text-right ml-4">
                            <p className="text-lg font-bold text-gray-900">
                              {formatarValorComUnidade(fator.valorAtual, fator.unidade)}
                            </p>
                            {isModificado && (
                              <p className="text-xs text-gray-500">
                                Padrão: {formatarValorComUnidade(fator.valorPadrao, fator.unidade)}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}

          {gruposFiltrados.length === 0 && (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500">Nenhum fator encontrado com os filtros selecionados</p>
            </div>
          )}
        </div>

        {/* Painel de Edição */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow sticky top-6">
            {fatorSelecionado ? (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Editar Fator
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome
                    </label>
                    <p className="text-gray-900">{fatorSelecionado.nome}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Descrição
                    </label>
                    <p className="text-sm text-gray-600">{fatorSelecionado.descricao}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Valor Atual
                    </label>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatarValorComUnidade(fatorSelecionado.valorAtual, fatorSelecionado.unidade)}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Novo Valor
                    </label>
                    <input
                      type="number"
                      value={valorTemp}
                      onChange={(e) => handleAlterarValor(parseFloat(e.target.value))}
                      step={fatorSelecionado.tipo === 'percentual' ? 0.1 : 1}
                      min={fatorSelecionado.minimo}
                      max={fatorSelecionado.maximo}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Permitido: {fatorSelecionado.minimo} a {fatorSelecionado.maximo} {fatorSelecionado.unidade}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Valor Padrão
                    </label>
                    <p className="text-gray-600">
                      {formatarValorComUnidade(fatorSelecionado.valorPadrao, fatorSelecionado.unidade)}
                    </p>
                  </div>

                  {simulacao && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-900 mb-2">Impacto da Alteração</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-blue-700">Variação:</span>
                          <span className={`font-medium ${simulacao.impactoPercentual >= 0 ? 'text-red-600' : 'text-green-600'}`}>
                            {simulacao.impactoPercentual >= 0 ? '+' : ''}{simulacao.impactoPercentual.toFixed(2)}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-700">Diferença:</span>
                          <span className="font-medium text-blue-900">
                            {formatarValorComUnidade(simulacao.impactoAbsoluto, fatorSelecionado.unidade)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <button
                      onClick={handleAplicarAlteracao}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Aplicar
                    </button>
                    <button
                      onClick={() => {
                        fatorSelecionado.valorAtual = fatorSelecionado.valorPadrao;
                        setGruposFatores([...agruparFatoresPorCategoria()]);
                        setValorTemp(fatorSelecionado.valorPadrao);
                      }}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Resetar
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎛️</span>
                </div>
                <p className="text-gray-600">
                  Selecione um fator na lista para editar
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

