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
        brand: {
          DEFAULT: '#164B8D',
          dark: '#0e3461',
          light: '#2a6bc0',
        },
        accent: {
          DEFAULT: '#79a707',
          dark: '#5f8305',
        },
        whatsapp: { DEFAULT: '#25D366', dark: '#1da851' },
        gold: '#ffd54a',
        ink: '#1a2233',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: { '2xl': '1200px' },
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.08)',
        cardHover: '0 12px 34px rgba(22,75,141,0.16)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: { 'fade-up': 'fade-up .5s ease both' },
    },
  },
  plugins: [],
};

export default config;
