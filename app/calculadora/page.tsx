import SeletorPlanos from '@/components/SeletorPlanos';

export const metadata = {
  title: 'Calculadora - Seguro Auto Mensal | AURA Seguradora',
  description: 'Escolha o plano ideal de seguro auto mensal. Valores fixos a partir de R$ 150/mês com todas as coberturas inclusas.',
};

export default function CalculadoraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Seguro Auto Mensal
          </h1>
          <p className="text-xl text-blue-100">
            Escolha o plano ideal para você. Valores fixos, sem surpresas.
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-12">
        <SeletorPlanos />
      </div>

      {/* Informações Adicionais */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Por que escolher o Seguro Auto Mensal?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Valores Fixos</h3>
                <p className="text-sm text-gray-600">
                  Sem surpresas. Você sabe exatamente quanto vai pagar todo mês.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Tudo Incluso</h3>
                <p className="text-sm text-gray-600">
                  Vidros, RC, Assistências 24h e APP já inclusos em todos os planos.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sem Multa</h3>
                <p className="text-sm text-gray-600">
                  Cancele quando quiser, sem multa ou burocracia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Rápido */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Perguntas Frequentes
            </h2>

            <div className="space-y-4">
              <details className="bg-white rounded-lg p-4 border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  O que está incluso em todos os planos?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  Todos os planos incluem: Cobertura Compreensiva de Casco (100% FIPE), Vidros/Faróis/Lanternas, 
                  Responsabilidade Civil (RC), Assistências 24 horas e Seguro de Acidentes Pessoais de Passageiros (APP).
                </p>
              </details>

              <details className="bg-white rounded-lg p-4 border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Qual a diferença entre os planos?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  A principal diferença está na franquia (4%, 5% ou 6%), no limite de RC (R$ 50k, R$ 100k ou R$ 150k), 
                  na distância do reboque (200km, 350km ou 500km) e na inclusão de Carro Reserva (apenas no Essencial).
                </p>
              </details>

              <details className="bg-white rounded-lg p-4 border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Posso cancelar a qualquer momento?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  Sim! O Seguro Auto Mensal não tem multa de cancelamento. Você pode cancelar quando quiser, 
                  sem burocracia. Basta solicitar pelo app ou site.
                </p>
              </details>

              <details className="bg-white rounded-lg p-4 border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Como funciona a renovação?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  A renovação é automática todo mês. Você não precisa fazer nada. Se quiser pausar ou cancelar, 
                  é só avisar antes do vencimento.
                </p>
              </details>

              <details className="bg-white rounded-lg p-4 border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Quanto tempo leva para aprovar?
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  A aprovação é feita em até 24 horas após o envio da documentação completa. 
                  Em muitos casos, a aprovação é imediata.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
