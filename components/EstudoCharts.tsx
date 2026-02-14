"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

/* ─── Accordion genérico ─── */
export function Accordion({ title, icon, children, defaultOpen = false }: {
  title: string; icon?: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 bg-white hover:bg-slate-50 transition-colors text-left"
      >
        <span className="flex items-center gap-3 font-bold text-slate-800 text-lg">
          {icon}{title}
        </span>
        {open ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      {open && <div className="p-5 pt-0 bg-white">{children}</div>}
    </div>
  );
}

/* ─── Barra de progresso animada ─── */
export function ProgressBar({ value, max, color = "bg-blue-600", label }: {
  value: number; max: number; color?: string; label?: string;
}) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="w-full">
      {label && <div className="flex justify-between text-xs text-slate-500 mb-1"><span>{label}</span><span>{pct.toFixed(0)}%</span></div>}
      <div className="w-full bg-slate-200 rounded-full h-3">
        <div className={`${color} h-3 rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/* ─── Mini bar chart com CSS ─── */
export function MiniBarChart({ data, maxValue, color = "bg-blue-600" }: {
  data: { label: string; value: number }[]; maxValue?: number; color?: string;
}) {
  const max = maxValue || Math.max(...data.map(d => d.value));
  return (
    <div className="space-y-2">
      {data.map((d, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-xs text-slate-500 w-16 text-right flex-shrink-0">{d.label}</span>
          <div className="flex-1 bg-slate-100 rounded-full h-6 relative">
            <div
              className={`${color} h-6 rounded-full transition-all duration-700 flex items-center justify-end pr-2`}
              style={{ width: `${Math.max((d.value / max) * 100, 8)}%` }}
            >
              <span className="text-xs font-bold text-white">{formatCurrency(d.value)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Tabela de projeção com destaque ─── */
export function ProjectionTable({ headers, rows, highlightCol }: {
  headers: string[];
  rows: (string | number)[][];
  highlightCol?: number;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-aura-primary text-white">
            {headers.map((h, i) => (
              <th key={i} className={`p-3 text-left ${i === 0 ? 'rounded-tl-lg' : ''} ${i === headers.length - 1 ? 'rounded-tr-lg' : ''}`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`p-3 border-b border-slate-100 ${
                    ci === 0 ? 'font-semibold text-slate-700' : 'text-right'
                  } ${highlightCol !== undefined && ci === highlightCol ? 'bg-emerald-50 font-bold text-emerald-700' : ''}`}
                >
                  {typeof cell === 'number' ? formatCurrency(cell) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Cenário Selector ─── */
export function ScenarioTabs({ scenarios, children }: {
  scenarios: { id: string; label: string; color: string }[];
  children: (activeScenario: string) => React.ReactNode;
}) {
  const [active, setActive] = useState(scenarios[0].id);
  return (
    <div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {scenarios.map(s => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              active === s.id
                ? `${s.color} text-white shadow-md`
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      {children(active)}
    </div>
  );
}

/* ─── KPI Card ─── */
export function KPICard({ title, value, subtitle, icon, color = "text-aura-primary", bgColor = "bg-blue-50" }: {
  title: string; value: string; subtitle?: string; icon?: React.ReactNode; color?: string; bgColor?: string;
}) {
  return (
    <div className={`${bgColor} rounded-xl p-5 border border-slate-100`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 mb-1">{title}</p>
          <p className={`text-2xl font-bold ${color}`}>{value}</p>
          {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
        </div>
        {icon && <div className="p-2 bg-white/60 rounded-lg">{icon}</div>}
      </div>
    </div>
  );
}

/* ─── Timeline vertical ─── */
export function Timeline({ items }: {
  items: { date: string; title: string; description: string; color: string }[];
}) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />
      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className="relative pl-12">
            <div className={`absolute left-2 w-5 h-5 rounded-full ${item.color} border-2 border-white shadow`} />
            <div className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm">
              <span className="text-xs text-slate-400">{item.date}</span>
              <h4 className="font-bold text-slate-800 mt-1">{item.title}</h4>
              <p className="text-sm text-slate-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Stacked horizontal bar ─── */
export function StackedBar({ segments, total }: {
  segments: { label: string; value: number; color: string }[];
  total: number;
}) {
  return (
    <div>
      <div className="flex rounded-full overflow-hidden h-8 mb-2">
        {segments.map((s, i) => (
          <div
            key={i}
            className={`${s.color} flex items-center justify-center text-xs font-bold text-white transition-all duration-500`}
            style={{ width: `${(s.value / total) * 100}%` }}
            title={`${s.label}: ${formatCurrency(s.value)}`}
          >
            {(s.value / total) * 100 > 10 ? `${((s.value / total) * 100).toFixed(0)}%` : ''}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        {segments.map((s, i) => (
          <div key={i} className="flex items-center gap-1.5 text-xs">
            <div className={`w-3 h-3 rounded-sm ${s.color}`} />
            <span className="text-slate-600">{s.label}: {formatCurrency(s.value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Formatação ─── */
function formatCurrency(value: number): string {
  if (Math.abs(value) >= 1_000_000) {
    return `R$ ${(value / 1_000_000).toFixed(2).replace('.', ',')} M`;
  }
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
}

export { formatCurrency };
