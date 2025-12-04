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
          primary: '#3B82F6',      // Azul AURA
          secondary: '#06B6D4',    // Ciano AURA
          accent: '#0F172A',       // Azul Profundo
          light: '#CBD5E1',        // Cinza Claro
        },
      },
    },
  },
  plugins: [],
};

export default config;
