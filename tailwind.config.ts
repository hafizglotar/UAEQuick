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
        // Greens darkened from the original brand values so white text on them
        // and accent text on white/slate-50 pass WCAG AA (>= 4.5:1).
        accent: {
          DEFAULT: '#5a7d05',
          dark: '#415b04',
          // For accent text on dark (brand-dark) surfaces, e.g. the footer logo.
          light: '#9fd000',
        },
        whatsapp: { DEFAULT: '#188741', dark: '#126832' },
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
