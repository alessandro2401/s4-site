(()=>{var e={};e.id=978,e.ids=[978],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9086:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>c,routeModule:()=>u,tree:()=>n}),a(3689),a(6966),a(9855),a(933);var s=a(14),r=a(4005),o=a(1795),l=a.n(o),i=a(5327),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);a.d(t,d);let n=["",{children:["dashboard",{children:["analises",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,3689)),"/home/ubuntu/s4-site/app/dashboard/analises/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,6966)),"/home/ubuntu/s4-site/app/dashboard/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,9855)),"/home/ubuntu/s4-site/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,933,23)),"next/dist/client/components/not-found-error"]}],c=["/home/ubuntu/s4-site/app/dashboard/analises/page.tsx"],x="/dashboard/analises/page",m={require:a,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/dashboard/analises/page",pathname:"/dashboard/analises",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},6658:(e,t,a)=>{Promise.resolve().then(a.bind(a,6014))},6014:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>M});var s=a(8215),r=a(6981),o=a(238),l=a(348),i=a(6281);async function d(e){try{return await navigator.clipboard.writeText(e),!0}catch(e){return console.error("Erro ao copiar para \xe1rea de transfer\xeancia:",e),!1}}var n=a(3140);function c({cotacoes:e}){let t=(0,r.useMemo)(()=>(0,i.Xg)(e),[e]),a=[{nome:"Cota\xe7\xf5es",valor:t.cotacoes,cor:"bg-blue-500",largura:100},{nome:"Propostas",valor:t.propostas,cor:"bg-yellow-500",largura:t.cotacoes>0?t.propostas/t.cotacoes*100:0,taxa:t.taxaCotacaoParaProposta},{nome:"Ap\xf3lices",valor:t.apolices,cor:"bg-green-500",largura:t.cotacoes>0?t.apolices/t.cotacoes*100:0,taxa:t.taxaConversaoGeral}];return(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow p-6",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[s.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Funil de Vendas"}),s.jsx(n.Z,{className:"w-5 h-5 text-gray-400"})]}),s.jsx("div",{className:"space-y-4",children:a.map((e,t)=>(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-sm font-medium text-gray-700",children:e.nome}),(0,s.jsxs)("div",{className:"text-right",children:[s.jsx("span",{className:"text-sm font-bold text-gray-900",children:e.valor}),void 0!==e.taxa&&(0,s.jsxs)("span",{className:"text-xs text-gray-500 ml-2",children:["(",(0,i.Lw)(e.taxa),")"]})]})]}),s.jsx("div",{className:"relative h-12 bg-gray-100 rounded-lg overflow-hidden",children:s.jsx("div",{className:`h-full ${e.cor} transition-all duration-500 flex items-center justify-center`,style:{width:`${e.largura}%`},children:e.largura>20&&s.jsx("span",{className:"text-white font-semibold text-sm",children:e.valor})})}),t<a.length-1&&s.jsx("div",{className:"flex items-center justify-center my-2",children:s.jsx("div",{className:"w-px h-4 bg-gray-300"})})]},e.nome))}),s.jsx("div",{className:"mt-6 pt-6 border-t border-gray-200",children:(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4 text-center",children:[(0,s.jsxs)("div",{children:[s.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Taxa de Convers\xe3o"}),s.jsx("p",{className:"text-2xl font-bold text-green-600",children:(0,i.Lw)(t.taxaConversaoGeral)})]}),(0,s.jsxs)("div",{children:[s.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Proposta → Ap\xf3lice"}),s.jsx("p",{className:"text-2xl font-bold text-yellow-600",children:(0,i.Lw)(t.taxaPropostaParaApolice)})]})]})})]})}var x=a(8689);function m({cotacoes:e}){let t=(0,r.useMemo)(()=>(0,i.yU)(e),[e]),a=["bg-blue-500","bg-green-500","bg-yellow-500","bg-orange-500","bg-red-500"];return(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow p-6",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[s.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Distribui\xe7\xe3o por Regi\xe3o"}),s.jsx(x.Z,{className:"w-5 h-5 text-gray-400"})]}),s.jsx("div",{className:"space-y-4",children:t.porRegiao.map((e,t)=>(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,s.jsxs)("span",{className:"text-sm font-medium text-gray-700",children:["Regi\xe3o ",e.regiao]}),(0,s.jsxs)("div",{className:"text-right",children:[s.jsx("span",{className:"text-sm font-bold text-gray-900",children:e.quantidade}),(0,s.jsxs)("span",{className:"text-xs text-gray-500 ml-2",children:["(",(0,i.Lw)(e.percentual),")"]})]})]}),s.jsx("div",{className:"relative h-8 bg-gray-100 rounded-lg overflow-hidden",children:s.jsx("div",{className:`h-full ${a[t]} transition-all duration-500`,style:{width:`${e.percentual}%`}})})]},e.regiao))}),(0,s.jsxs)("div",{className:"mt-6 pt-6 border-t border-gray-200",children:[s.jsx("p",{className:"text-xs text-gray-500 mb-3",children:"Classifica\xe7\xe3o de Risco:"}),s.jsx("div",{className:"grid grid-cols-1 gap-2 text-xs",children:[1,2,3,4,5].map((e,t)=>(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:`w-3 h-3 rounded ${a[t]}`}),s.jsx("span",{className:"text-gray-600",children:(0,i.Rd)(e)})]},e))})]})]})}var u=a(6497);function p({cotacoes:e}){let t=(0,r.useMemo)(()=>(0,i.yU)(e),[e]).porMes.filter(e=>e.quantidade>0).slice(-6),a=Math.max(...t.map(e=>e.quantidade),1),o=e=>{let[t,a]=e.split("-");return`${["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"][parseInt(a)-1]}/${t.slice(2)}`};return(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow p-6",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[s.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Evolu\xe7\xe3o Temporal"}),s.jsx(u.Z,{className:"w-5 h-5 text-gray-400"})]}),0===t.length?(0,s.jsxs)("div",{className:"text-center py-12",children:[s.jsx(u.Z,{className:"w-12 h-12 mx-auto mb-3 text-gray-300"}),s.jsx("p",{className:"text-gray-500",children:"Sem dados para exibir"})]}):(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"relative h-64 mb-4",children:s.jsx("div",{className:"absolute inset-0 flex items-end justify-around gap-2",children:t.map(e=>{let t=e.quantidade/a*100,r=e.quantidade>0?e.conversoes/e.quantidade*100:0;return(0,s.jsxs)("div",{className:"flex-1 flex flex-col items-center",children:[(0,s.jsxs)("div",{className:"w-full relative group",children:[s.jsx("div",{className:"w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-500",style:{height:`${t}%`},children:s.jsx("div",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block",children:(0,s.jsxs)("div",{className:"bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap",children:[(0,s.jsxs)("p",{className:"font-semibold",children:[e.quantidade," cota\xe7\xf5es"]}),(0,s.jsxs)("p",{className:"text-gray-300",children:[e.conversoes," convers\xf5es"]}),s.jsx("p",{className:"text-green-400",children:(0,i.Lw)(r)})]})})}),e.conversoes>0&&s.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-green-500 rounded-t-lg",style:{height:`${e.conversoes/e.quantidade*t}%`}})]}),s.jsx("div",{className:"mt-2 text-xs text-gray-600 font-medium",children:o(e.mes)})]},e.mes)})})}),(0,s.jsxs)("div",{className:"flex items-center justify-center gap-6 text-sm",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-4 h-4 bg-blue-500 rounded"}),s.jsx("span",{className:"text-gray-600",children:"Cota\xe7\xf5es"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-4 h-4 bg-green-500 rounded"}),s.jsx("span",{className:"text-gray-600",children:"Convers\xf5es"})]})]}),(0,s.jsxs)("div",{className:"mt-6 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4 text-center",children:[(0,s.jsxs)("div",{children:[s.jsx("p",{className:"text-xs text-gray-600 mb-1",children:"Total Per\xedodo"}),s.jsx("p",{className:"text-lg font-bold text-gray-900",children:t.reduce((e,t)=>e+t.quantidade,0)})]}),(0,s.jsxs)("div",{children:[s.jsx("p",{className:"text-xs text-gray-600 mb-1",children:"Convers\xf5es"}),s.jsx("p",{className:"text-lg font-bold text-green-600",children:t.reduce((e,t)=>e+t.conversoes,0)})]}),(0,s.jsxs)("div",{children:[s.jsx("p",{className:"text-xs text-gray-600 mb-1",children:"Taxa M\xe9dia"}),s.jsx("p",{className:"text-lg font-bold text-blue-600",children:(0,i.Lw)(t.reduce((e,t)=>e+t.quantidade,0)>0?t.reduce((e,t)=>e+t.conversoes,0)/t.reduce((e,t)=>e+t.quantidade,0)*100:0)})]})]})]})]})}var h=a(6086);let g=(0,h.Z)("ChartPie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);function b({cotacoes:e}){let t=(0,r.useMemo)(()=>(0,i.yU)(e),[e]),a=[{status:"cotacao",quantidade:t.porStatus.cotacao,cor:"bg-blue-500",corTexto:"text-blue-700",corFundo:"bg-blue-50"},{status:"proposta",quantidade:t.porStatus.proposta,cor:"bg-yellow-500",corTexto:"text-yellow-700",corFundo:"bg-yellow-50"},{status:"apolice",quantidade:t.porStatus.apolice,cor:"bg-green-500",corTexto:"text-green-700",corFundo:"bg-green-50"},{status:"cancelada",quantidade:t.porStatus.cancelada,cor:"bg-red-500",corTexto:"text-red-700",corFundo:"bg-red-50"}].map(e=>({...e,percentual:t.total>0?e.quantidade/t.total*100:0})),o=2*Math.PI*80,l=0;return(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow p-6",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[s.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Distribui\xe7\xe3o por Status"}),s.jsx(g,{className:"w-5 h-5 text-gray-400"})]}),s.jsx("div",{className:"flex items-center justify-center mb-6",children:(0,s.jsxs)("svg",{width:"200",height:"200",viewBox:"0 0 200 200",className:"transform -rotate-90",children:[s.jsx("circle",{cx:"100",cy:"100",r:80,fill:"none",stroke:"#f3f4f6",strokeWidth:"40"}),a.map((e,t)=>{let a=o-o*l/100,r=`${o*e.percentual/100} ${o}`,i=s.jsx("circle",{cx:"100",cy:"100",r:80,fill:"none",stroke:e.cor.replace("bg-","#").replace("500","500"),strokeWidth:"40",strokeDasharray:r,strokeDashoffset:a,className:e.cor.replace("bg-","stroke-")},e.status);return l+=e.percentual,i})]})}),s.jsx("div",{className:"space-y-3",children:a.map(e=>(0,s.jsxs)("div",{className:`${e.corFundo} rounded-lg p-3 flex items-center justify-between`,children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:`w-4 h-4 ${e.cor} rounded-full`}),s.jsx("span",{className:`text-sm font-medium ${e.corTexto}`,children:(0,i.bT)(e.status)})]}),(0,s.jsxs)("div",{className:"text-right",children:[s.jsx("span",{className:`text-sm font-bold ${e.corTexto}`,children:e.quantidade}),(0,s.jsxs)("span",{className:"text-xs text-gray-500 ml-2",children:["(",(0,i.Lw)(e.percentual),")"]})]})]},e.status))}),(0,s.jsxs)("div",{className:"mt-6 pt-6 border-t border-gray-200 text-center",children:[s.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Total de Cota\xe7\xf5es"}),s.jsx("p",{className:"text-3xl font-bold text-gray-900",children:t.total})]})]})}var j=a(3057),f=a(8536),v=a(5361);let y=(0,h.Z)("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);var N=a(3805);let w=(0,h.Z)("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);var P=a(7497);function M(){let{usuario:e}=(0,o.aC)(),[t,a]=(0,r.useState)("30d"),[n,x]=(0,r.useState)(!1),h=(0,l.Nd)(),g=(0,r.useMemo)(()=>{if("all"===t)return h;let e="7d"===t?7:"30d"===t?30:90,a=new Date;return a.setDate(a.getDate()-e),h.filter(e=>new Date(e.data)>=a)},[h,t]),M=(0,r.useMemo)(()=>(0,i.yU)(g),[g]),k=(0,r.useMemo)(()=>(0,i.Xg)(g),[g]),C=async()=>{let e=function(e){let t=e.length,a=e.filter(e=>"apolice"===e.status).length,s=t>0?(a/t*100).toFixed(1):"0.0",r=e.filter(e=>"apolice"===e.status).reduce((e,t)=>e+t.resultado.premioAnual,0);return`
📊 Resumo de Cota\xe7\xf5es - S4 Seguros

Total de cota\xe7\xf5es: ${t}
Ap\xf3lices emitidas: ${a}
Taxa de convers\xe3o: ${s}%
Valor total anual: ${(0,i.qQ)(r)}

Gerado em: ${new Date().toLocaleString("pt-BR")}
  `.trim()}(g);await d(e)&&(x(!0),setTimeout(()=>x(!1),2e3))},$=[{titulo:"Taxa de Convers\xe3o",valor:(0,i.Lw)(M.taxaConversao),descricao:`${M.porStatus.apolice} de ${M.total} cota\xe7\xf5es`,icon:j.Z,cor:"bg-green-500",tendencia:"+2.3%"},{titulo:"Ticket M\xe9dio Mensal",valor:(0,i.qQ)(M.valorMedioMensal),descricao:"Pr\xeamio m\xe9dio por cota\xe7\xe3o",icon:f.Z,cor:"bg-blue-500",tendencia:"+5.1%"},{titulo:"Receita Potencial",valor:(0,i.qQ)(M.valorTotalPotencial),descricao:"Anual em ap\xf3lices ativas",icon:v.Z,cor:"bg-purple-500",tendencia:"+12.4%"},{titulo:"Qualidade do Lead",valor:(0,i.Lw)(k.taxaCotacaoParaProposta),descricao:"Cota\xe7\xf5es que viram propostas",icon:y,cor:"bg-yellow-500",tendencia:"+1.8%"}];return(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{children:[s.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"An\xe1lises e Performance"}),s.jsx("p",{className:"text-gray-600 mt-1",children:"Indicadores e m\xe9tricas de convers\xe3o"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx(u.Z,{className:"w-5 h-5 text-gray-400"}),(0,s.jsxs)("select",{value:t,onChange:e=>a(e.target.value),className:"px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[s.jsx("option",{value:"7d",children:"\xdaltimos 7 dias"}),s.jsx("option",{value:"30d",children:"\xdaltimos 30 dias"}),s.jsx("option",{value:"90d",children:"\xdaltimos 90 dias"}),s.jsx("option",{value:"all",children:"Todo o per\xedodo"})]})]})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:$.map(e=>{let t=e.icon;return(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("div",{className:`w-12 h-12 ${e.cor} rounded-lg flex items-center justify-center`,children:s.jsx(t,{className:"w-6 h-6 text-white"})}),s.jsx("span",{className:"text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded",children:e.tendencia})]}),s.jsx("h3",{className:"text-3xl font-bold text-gray-900 mb-1",children:e.valor}),s.jsx("p",{className:"text-sm font-medium text-gray-600 mb-1",children:e.titulo}),s.jsx("p",{className:"text-xs text-gray-500",children:e.descricao})]},e.titulo)})}),s.jsx("div",{className:"bg-white rounded-lg shadow p-4",children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{children:[s.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Exportar Dados"}),s.jsx("p",{className:"text-sm text-gray-600 mt-1",children:"Baixe ou compartilhe os dados do per\xedodo selecionado"})]}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)("button",{onClick:()=>{(function(e,t){let a=URL.createObjectURL(e),s=document.createElement("a");s.href=a,s.download=t,s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(a),100)})(new Blob(["\uFEFF"+(0,i.lm)(g)],{type:"text/csv;charset=utf-8;"}),`cotacoes_${new Date().toISOString().split("T")[0]}.csv`)},className:"flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",children:[s.jsx(N.Z,{className:"w-4 h-4"}),"Excel"]}),(0,s.jsxs)("button",{onClick:()=>{!function(e,t){let a=function(e){let t=new Date().toLocaleString("pt-BR"),a=e.map((e,t)=>`
    <tr>
      <td>${t+1}</td>
      <td>${new Date(e.data).toLocaleDateString("pt-BR")}</td>
      <td>${e.dadosPessoais.nome}</td>
      <td>${e.dadosPessoais.cpf}</td>
      <td>${e.veiculo.marca} ${e.veiculo.modelo} ${e.veiculo.ano}</td>
      <td>${e.localizacao.cidade}/${e.localizacao.uf}</td>
      <td>${(0,i.qQ)(e.resultado.premioMensal)}</td>
      <td>${(0,i.qQ)(e.resultado.premioAnual)}</td>
      <td><span class="status status-${e.status}">${e.status.toUpperCase()}</span></td>
    </tr>
  `).join("");return`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Relat\xf3rio de Cota\xe7\xf5es</title>
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
        <h1>Relat\xf3rio de Cota\xe7\xf5es</h1>
        <p>S4 Seguros - Administradora Mutual</p>
        <p>Gerado em: ${t}</p>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
            <th>Cliente</th>
            <th>CPF</th>
            <th>Ve\xedculo</th>
            <th>Localiza\xe7\xe3o</th>
            <th>Pr\xeamio Mensal</th>
            <th>Pr\xeamio Anual</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${a}
        </tbody>
      </table>
      
      <div class="footer">
        <p>Total de cota\xe7\xf5es: ${e.length}</p>
        <p>\xa9 ${new Date().getFullYear()} S4 Seguros - Todos os direitos reservados</p>
      </div>
    </body>
    </html>
  `}(e),s=window.open("","_blank");s&&(s.document.write(a),s.document.close(),s.onload=()=>{s.print()})}(g)},className:"flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",children:[s.jsx(w,{className:"w-4 h-4"}),"PDF"]}),(0,s.jsxs)("button",{onClick:C,className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${n?"bg-green-100 text-green-700":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[s.jsx(P.Z,{className:"w-4 h-4"}),n?"Copiado!":"Copiar Resumo"]})]})]})}),(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsx(c,{cotacoes:g}),s.jsx(b,{cotacoes:g})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsx(m,{cotacoes:g}),s.jsx(p,{cotacoes:g})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow p-6",children:[s.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Detalhamento por Status"}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-sm text-gray-600",children:"Cota\xe7\xf5es"}),s.jsx("span",{className:"text-sm font-bold text-blue-600",children:M.porStatus.cotacao})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-sm text-gray-600",children:"Propostas"}),s.jsx("span",{className:"text-sm font-bold text-yellow-600",children:M.porStatus.proposta})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-sm text-gray-600",children:"Ap\xf3lices"}),s.jsx("span",{className:"text-sm font-bold text-green-600",children:M.porStatus.apolice})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-sm text-gray-600",children:"Canceladas"}),s.jsx("span",{className:"text-sm font-bold text-red-600",children:M.porStatus.cancelada})]})]})]}),(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow p-6",children:[s.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"An\xe1lise de Valores"}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{children:[s.jsx("span",{className:"text-sm text-gray-600",children:"Pr\xeamio M\xe9dio Mensal"}),s.jsx("p",{className:"text-xl font-bold text-gray-900 mt-1",children:(0,i.qQ)(M.valorMedioMensal)})]}),(0,s.jsxs)("div",{children:[s.jsx("span",{className:"text-sm text-gray-600",children:"Pr\xeamio M\xe9dio Anual"}),s.jsx("p",{className:"text-xl font-bold text-gray-900 mt-1",children:(0,i.qQ)(M.valorMedioAnual)})]}),(0,s.jsxs)("div",{children:[s.jsx("span",{className:"text-sm text-gray-600",children:"Total Potencial"}),s.jsx("p",{className:"text-xl font-bold text-green-600 mt-1",children:(0,i.qQ)(M.valorTotalPotencial)})]})]})]}),(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow p-6",children:[s.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"Indicadores de Performance"}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{children:[s.jsx("span",{className:"text-sm text-gray-600",children:"Taxa de Convers\xe3o"}),s.jsx("p",{className:"text-xl font-bold text-green-600 mt-1",children:(0,i.Lw)(M.taxaConversao)})]}),(0,s.jsxs)("div",{children:[s.jsx("span",{className:"text-sm text-gray-600",children:"Cota\xe7\xe3o → Proposta"}),s.jsx("p",{className:"text-xl font-bold text-yellow-600 mt-1",children:(0,i.Lw)(k.taxaCotacaoParaProposta)})]}),(0,s.jsxs)("div",{children:[s.jsx("span",{className:"text-sm text-gray-600",children:"Proposta → Ap\xf3lice"}),s.jsx("p",{className:"text-xl font-bold text-blue-600 mt-1",children:(0,i.Lw)(k.taxaPropostaParaApolice)})]})]})]})]}),(0,s.jsxs)("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow p-6",children:[s.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"\uD83D\uDCA1 Insights e Recomenda\xe7\xf5es"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{className:"bg-white rounded-lg p-4",children:[s.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"✅ Pontos Fortes"}),(0,s.jsxs)("ul",{className:"text-sm text-gray-600 space-y-1",children:[s.jsx("li",{children:"• Taxa de convers\xe3o acima da m\xe9dia do mercado"}),s.jsx("li",{children:"• Ticket m\xe9dio competitivo"}),s.jsx("li",{children:"• Boa distribui\xe7\xe3o geogr\xe1fica"})]})]}),(0,s.jsxs)("div",{className:"bg-white rounded-lg p-4",children:[s.jsx("h4",{className:"font-semibold text-gray-900 mb-2",children:"\uD83C\uDFAF Oportunidades"}),(0,s.jsxs)("ul",{className:"text-sm text-gray-600 space-y-1",children:[s.jsx("li",{children:"• Reduzir taxa de cancelamento"}),s.jsx("li",{children:"• Aumentar convers\xe3o de propostas"}),s.jsx("li",{children:"• Focar em regi\xf5es de menor risco"})]})]})]})]})]})}},6281:(e,t,a)=>{"use strict";a.d(t,{Lw:()=>c,Rd:()=>x,Xg:()=>l,bT:()=>m,lm:()=>d,qQ:()=>n,sI:()=>i,w6:()=>r,yU:()=>o});var s=a(348);function r(e){let t=(0,s.Nd)();if(e.dataInicio){let a=new Date(e.dataInicio);t=t.filter(e=>new Date(e.data)>=a)}if(e.dataFim){let a=new Date(e.dataFim);a.setHours(23,59,59,999),t=t.filter(e=>new Date(e.data)<=a)}if(e.status&&"todos"!==e.status&&(t=t.filter(t=>t.status===e.status)),void 0!==e.valorMin&&(t=t.filter(t=>t.resultado.premioMensal>=e.valorMin)),void 0!==e.valorMax&&(t=t.filter(t=>t.resultado.premioMensal<=e.valorMax)),e.regiao&&"todas"!==e.regiao&&(t=t.filter(t=>t.localizacao.regiao===e.regiao)),e.vendedorId&&(t=t.filter(t=>t.vendedorId===e.vendedorId)),e.busca){let a=e.busca.toLowerCase().trim();t=t.filter(e=>{let t=e.dadosPessoais.cpf.replace(/\D/g,""),s=e.dadosPessoais.nome.toLowerCase(),r=e.dadosPessoais.email.toLowerCase(),o=e.dadosPessoais.telefone.replace(/\D/g,"");return t.includes(a)||s.includes(a)||r.includes(a)||o.includes(a)})}return t}function o(e){let t=e||(0,s.Nd)(),a=t.length,r={cotacao:t.filter(e=>"cotacao"===e.status).length,proposta:t.filter(e=>"proposta"===e.status).length,apolice:t.filter(e=>"apolice"===e.status).length,cancelada:t.filter(e=>"cancelada"===e.status).length},o=a>0?r.apolice/a*100:0,l=a>0?t.reduce((e,t)=>e+t.resultado.premioMensal,0)/a:0,i=a>0?t.reduce((e,t)=>e+t.resultado.premioAnual,0)/a:0,d=t.filter(e=>"apolice"===e.status).reduce((e,t)=>e+t.resultado.premioAnual,0),n=[1,2,3,4,5].map(e=>{let s=t.filter(t=>t.localizacao.regiao===e).length;return{regiao:e,quantidade:s,percentual:a>0?s/a*100:0}});return{total:a,porStatus:r,taxaConversao:o,valorMedioMensal:l,valorMedioAnual:i,valorTotalPotencial:d,porRegiao:n,porMes:function(e){let t={},a=new Date;for(let e=11;e>=0;e--){let s=new Date(a.getFullYear(),a.getMonth()-e,1);t[`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`]={quantidade:0,conversoes:0}}return e.forEach(e=>{let a=new Date(e.data),s=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}`;t[s]&&(t[s].quantidade++,"apolice"===e.status&&t[s].conversoes++)}),Object.entries(t).map(([e,t])=>({mes:e,quantidade:t.quantidade,conversoes:t.conversoes}))}(t)}}function l(e){let t=e||(0,s.Nd)();t.filter(e=>"cotacao"===e.status).length;let a=t.filter(e=>"proposta"===e.status).length,r=t.filter(e=>"apolice"===e.status).length,o=t.length;return{cotacoes:o,propostas:a+r,apolices:r,taxaCotacaoParaProposta:o>0?(a+r)/o*100:0,taxaPropostaParaApolice:a+r>0?r/(a+r)*100:0,taxaConversaoGeral:o>0?r/o*100:0}}function i(e,t){let a=[...e];switch(t){case"data-desc":return a.sort((e,t)=>new Date(t.data).getTime()-new Date(e.data).getTime());case"data-asc":return a.sort((e,t)=>new Date(e.data).getTime()-new Date(t.data).getTime());case"valor-desc":return a.sort((e,t)=>t.resultado.premioMensal-e.resultado.premioMensal);case"valor-asc":return a.sort((e,t)=>e.resultado.premioMensal-t.resultado.premioMensal);case"nome-asc":return a.sort((e,t)=>e.dadosPessoais.nome.localeCompare(t.dadosPessoais.nome));case"nome-desc":return a.sort((e,t)=>t.dadosPessoais.nome.localeCompare(e.dadosPessoais.nome));default:return a}}function d(e){return["ID,Data,Nome,CPF,Email,Telefone,Ve\xedculo,Ano,Valor FIPE,Cidade,UF,Regi\xe3o,Pr\xeamio Mensal,Pr\xeamio Anual,Status",...e.map(e=>[e.id,new Date(e.data).toLocaleDateString("pt-BR"),e.dadosPessoais.nome,e.dadosPessoais.cpf,e.dadosPessoais.email,e.dadosPessoais.telefone,`${e.veiculo.marca} ${e.veiculo.modelo}`,e.veiculo.ano,e.veiculo.valorFipe.toFixed(2),e.localizacao.cidade,e.localizacao.uf,e.localizacao.regiao,e.resultado.premioMensal.toFixed(2),e.resultado.premioAnual.toFixed(2),e.status]).map(e=>e.map(e=>`"${e}"`).join(","))].join("\n")}function n(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}function c(e){return`${e.toFixed(1)}%`}function x(e){return({1:"Regi\xe3o 1 - Menor Risco",2:"Regi\xe3o 2 - Risco Baixo",3:"Regi\xe3o 3 - Risco M\xe9dio",4:"Regi\xe3o 4 - Risco Alto",5:"Regi\xe3o 5 - Maior Risco"})[e]||`Regi\xe3o ${e}`}function m(e){return({cotacao:"Cota\xe7\xe3o",proposta:"Proposta",apolice:"Ap\xf3lice",cancelada:"Cancelada"})[e]}},6497:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});let s=(0,a(6086).Z)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},7497:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});let s=(0,a(6086).Z)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},3805:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});let s=(0,a(6086).Z)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]])},3057:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});let s=(0,a(6086).Z)("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]])},3140:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});let s=(0,a(6086).Z)("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]])},5361:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});let s=(0,a(6086).Z)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]])},3689:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});let s=(0,a(734).createProxy)(String.raw`/home/ubuntu/s4-site/app/dashboard/analises/page.tsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[977,329,333,213],()=>a(9086));module.exports=s})();