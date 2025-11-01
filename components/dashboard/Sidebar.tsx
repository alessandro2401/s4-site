'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth, getNomeNivel, getCorNivel } from '@/contexts/AuthContext';
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  DollarSign,
  Settings,
  Users,
  AlertCircle,
  FileSpreadsheet,
  Shield,
} from 'lucide-react';

interface MenuItem {
  nome: string;
  href: string;
  icon: React.ElementType;
  niveisPermitidos: string[];
}

const menuItems: MenuItem[] = [
  {
    nome: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    niveisPermitidos: ['master', 'admin', 'atuario', 'administrativo', 'vendedor'],
  },
  {
    nome: 'Cotações',
    href: '/dashboard/cotacoes',
    icon: FileText,
    niveisPermitidos: ['master', 'admin', 'atuario', 'administrativo', 'vendedor'],
  },
  {
    nome: 'Apólices',
    href: '/dashboard/apolices',
    icon: Shield,
    niveisPermitidos: ['master', 'admin', 'administrativo'],
  },
  {
    nome: 'Sinistros',
    href: '/dashboard/sinistros',
    icon: AlertCircle,
    niveisPermitidos: ['master', 'admin', 'atuario', 'administrativo'],
  },
  {
    nome: 'Análise',
    href: '/dashboard/analise',
    icon: BarChart3,
    niveisPermitidos: ['master', 'admin', 'atuario'],
  },
  {
    nome: 'Financeiro',
    href: '/dashboard/financeiro',
    icon: DollarSign,
    niveisPermitidos: ['master', 'admin', 'administrativo'],
  },
  {
    nome: 'Fatores',
    href: '/dashboard/fatores',
    icon: Settings,
    niveisPermitidos: ['master', 'admin', 'atuario'],
  },
  {
    nome: 'Relatórios',
    href: '/dashboard/relatorios',
    icon: FileSpreadsheet,
    niveisPermitidos: ['master', 'admin', 'atuario', 'administrativo'],
  },
  {
    nome: 'Usuários',
    href: '/dashboard/usuarios',
    icon: Users,
    niveisPermitidos: ['master', 'admin'],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { usuario, nivel } = useAuth();

  if (!usuario || !nivel) return null;

  const menuFiltrado = menuItems.filter(item =>
    item.niveisPermitidos.includes(nivel)
  );

  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold">Aura</h1>
            <p className="text-xs text-gray-400">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Informações do Usuário */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">
              {usuario.nome.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{usuario.nome}</p>
            <span className={`text-xs px-2 py-0.5 rounded-full ${getCorNivel(nivel)}`}>
              {getNomeNivel(nivel)}
            </span>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {menuFiltrado.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.nome}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <Link
          href="/calculadora"
          className="block text-center text-sm text-gray-400 hover:text-white transition-colors"
        >
          ← Voltar para calculadora
        </Link>
      </div>
    </div>
  );
}

