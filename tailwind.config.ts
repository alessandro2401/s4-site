import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          primary: '#001D3F',       // Azul Escuro Sóbrio (Manual da Marca)
          secondary: '#274A78',     // Azul Médio
          accent: '#10B981',        // Verde Destaque
          light: '#D9DDE2',         // Cinza Suave
          surface: '#F0F2F5',       // Background Claro
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,29,63,0.06), 0 4px 12px rgba(0,29,63,0.04)',
        'card-hover': '0 4px 12px rgba(0,29,63,0.10), 0 8px 24px rgba(0,29,63,0.06)',
        'nav': '0 2px 8px rgba(0,29,63,0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
