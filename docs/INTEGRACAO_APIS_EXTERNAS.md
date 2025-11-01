# 📚 Documentação de Integração de APIs Externas

**Data:** 1º de novembro de 2025  
**Versão:** 1.0.0  
**Autor:** Manus AI

---

## 1. Visão Geral

Este documento descreve a arquitetura e o processo para integrar APIs externas de validação na calculadora de seguro auto da Aura Seguradora. A ONDA 6 implementou toda a infraestrutura necessária, permitindo uma integração rápida e segura quando as APIs estiverem disponíveis.

**Modo de Operação:**

Atualmente, o sistema opera em modo **`mock`**, simulando as respostas das APIs para permitir o desenvolvimento e teste da interface. Para ativar as integrações reais, basta alterar a constante `MODO_API` no arquivo `/lib/servicos-externos.ts` para **`real`**.

```typescript
// /lib/servicos-externos.ts
export const MODO_API: 'mock' | 'real' = 'real'; // Mudar para 'real'
```

---

## 2. Arquitetura

A arquitetura foi projetada para ser **modular e escalável**, separando a lógica de validação, os serviços de API e os componentes de UI.

### Estrutura de Arquivos

```
/lib
├── validacoes.ts       # Funções de validação de formato (CPF, CNH, etc.)
└── servicos-externos.ts  # Serviços de API (mock e real)

/components
├── DadosPessoais.tsx     # Componente de UI para CPF, CNH, etc.
└── ...                 # Outros componentes da calculadora
```

### Fluxo de Validação

1. **Componente de UI (`DadosPessoais.tsx`):**
   - Captura os dados do usuário (CPF, CNH).
   - Chama a função de validação local de formato (`validacoes.ts`).
   - Se o formato for válido, chama o serviço de API (`servicos-externos.ts`).

2. **Serviço de API (`servicos-externos.ts`):**
   - Verifica a constante `MODO_API`.
   - Se `mock`, retorna uma resposta simulada com delay.
   - Se `real`, faz a chamada `fetch` para a API externa correspondente.

3. **Componente de UI (novamente):**
   - Recebe a resposta da API.
   - Atualiza o estado da UI (sucesso, erro, loading).
   - Se a validação for bem-sucedida, libera o próximo passo da cotação.

---

## 3. Configuração de APIs

Antes de mudar para o modo `real`, é necessário configurar as URLs e as chaves de API no arquivo `/lib/servicos-externos.ts` ou, preferencialmente, em variáveis de ambiente.

### Variáveis de Ambiente (.env.local)

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
# URLs das APIs
NEXT_PUBLIC_API_RECEITA_FEDERAL="https://api.gov.br/receita-federal/v1"
NEXT_PUBLIC_API_DETRAN="https://api.gov.br/detran/v2"
NEXT_PUBLIC_API_SERASA="https://api.serasa.com.br/score/v3"
NEXT_PUBLIC_API_SUSEP="https://api.susep.gov.br/sinistros/v1"
NEXT_PUBLIC_API_ITURAN="https://api.ituran.com.br/v2"
NEXT_PUBLIC_API_TRACKER="https://api.tracker.com.br/v1"
NEXT_PUBLIC_API_ONIXSAT="https://api.onixsat.com.br/v1"

# Chaves de API
NEXT_PUBLIC_API_KEY_RECEITA_FEDERAL="SUA_CHAVE_AQUI"
NEXT_PUBLIC_API_KEY_DETRAN="SUA_CHAVE_AQUI"
NEXT_PUBLIC_API_KEY_SERASA="SUA_CHAVE_AQUI"
NEXT_PUBLIC_API_KEY_SUSEP="SUA_CHAVE_AQUI"
NEXT_PUBLIC_API_KEY_RASTREAMENTO="SUA_CHAVE_AQUI"
```

### Interfaces de Serviço

Cada serviço de API possui uma interface de resposta bem definida. A implementação real da API deve retornar um objeto que corresponda a essa interface.

**Exemplo: `ResultadoValidacaoCPF`**

```typescript
export interface ResultadoValidacaoCPF {
  valido: boolean;
  nome?: string;
  dataNascimento?: string;
  situacao?: 'regular' | 'irregular' | 'suspenso' | 'cancelado';
  erro?: string;
}
```

---

## 4. Passo a Passo para Integração de uma Nova API

**Exemplo: Integrar API da Receita Federal**

1. **Obter Credenciais:**
   - Obtenha a URL do endpoint e a chave de API (API Key ou Bearer Token).

2. **Configurar Variáveis de Ambiente:**
   - Adicione `NEXT_PUBLIC_API_RECEITA_FEDERAL` e `NEXT_PUBLIC_API_KEY_RECEITA_FEDERAL` ao arquivo `.env.local`.

3. **Implementar Chamada Real:**
   - Abra o arquivo `/lib/servicos-externos.ts`.
   - Localize a função `validarCPFReceitaFederal`.
   - Substitua o `TODO` pela implementação real da chamada `fetch`, garantindo que o corpo da requisição e os headers estejam corretos.

   ```typescript
   // /lib/servicos-externos.ts
   export async function validarCPFReceitaFederal(cpf: string): Promise<ResultadoValidacaoCPF> {
     if (MODO_API === 'mock') {
       // ... (código mock)
     }
     
     // IMPLEMENTAÇÃO REAL
     try {
       const response = await fetch(`${API_URLS.receitaFederal}/consulta-cpf`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${API_KEYS.receitaFederal}`
         },
         body: JSON.stringify({ cpf })
       });
       
       if (!response.ok) {
         throw new Error('Erro na consulta à Receita Federal');
       }
       
       const data = await response.json();
       // TODO: Mapear a resposta da API para a interface ResultadoValidacaoCPF
       return data;
     } catch (error) {
       return {
         valido: false,
         erro: 'Erro ao consultar Receita Federal. Tente novamente mais tarde.'
       };
     }
   }
   ```

4. **Mapear Resposta:**
   - Certifique-se de que a resposta JSON da API seja mapeada corretamente para a interface `ResultadoValidacaoCPF`.

5. **Ativar Modo Real:**
   - Mude a constante `MODO_API` para `'real'`.

6. **Testar:**
   - Execute a aplicação e teste a validação de CPF com CPFs reais (válidos e inválidos) para garantir que a integração está funcionando corretamente.

---

## 5. APIs Preparadas para Integração

| API | Serviço | Função | Status |
|-----|---------|--------|--------|
| **Receita Federal** | Validação de CPF | `validarCPFReceitaFederal` | 🟢 **Pronto para integrar** |
| **Detran** | Validação de CNH | `validarCNHDetran` | 🟢 **Pronto para integrar** |
| **Serasa/SPC** | Score de Crédito | `consultarScoreCredito` | 🟢 **Pronto para integrar** |
| **SUSEP** | Histórico de Sinistros | `consultarHistoricoSinistros` | 🟢 **Pronto para integrar** |
| **Rastreamento** | Validação de Dispositivo | `validarRastreador` | 🟢 **Pronto para integrar** |

---

## 6. Considerações de Segurança

- **NUNCA** exponha chaves de API no lado do cliente (frontend).
- Todas as chamadas a APIs externas devem ser feitas a partir do **backend** (API Routes do Next.js) para proteger as credenciais.
- Utilize variáveis de ambiente para armazenar chaves de API e outras informações sensíveis.
- Implemente tratamento de erros robusto para lidar com falhas de API (timeouts, erros 4xx/5xx).
- Considere implementar um cache no lado do servidor para reduzir o número de chamadas a APIs externas e melhorar a performance.

---

## 7. Conclusão

A arquitetura implementada na ONDA 6 fornece uma base **sólida, segura e escalável** para a integração de APIs externas. O processo de integração foi simplificado ao máximo, permitindo que a equipe de desenvolvimento ative novas validações de forma rápida e com baixo risco.

**Próximo passo:** Obter as credenciais das APIs e seguir o passo a passo de integração descrito neste documento.

