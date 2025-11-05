const { fontFamily } = require('tailwindcss/defaultTheme');

/********************
 * Tailwind Config
 *******************/
module.exports = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/features/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f8ff',
          100: '#e6edff',
          200: '#c5d5ff',
          300: '#94b2ff',
          400: '#5f86ff',
          500: '#3a5eff',
          600: '#2b46cc',
          700: '#20349e',
          800: '#16246d',
          900: '#0d1642'
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans]
      },
      transitionTimingFunction: {
        'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
