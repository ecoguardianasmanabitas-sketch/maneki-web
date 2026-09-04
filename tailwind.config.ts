import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        akairo: {
          50: '#FFF0F2',
          500: '#BC002D',
          700: '#8A0020',
          900: '#5C0015',
        },
        sumi: {
          900: '#1A1A1A',
          800: '#2A2A2A',
          700: '#3A3A3A',
        },
        kin: {
          400: '#E6C547',
          500: '#D4AF37',
          600: '#B8941F',
        },
        matcha: {
          400: '#9BB87E',
          500: '#7B9F6D',
          600: '#5F7F52',
        },
        sakura: {
          300: '#FFD4DE',
          400: '#FFB7C5',
          500: '#FF99AC',
        },
        tatami: '#D4C5B5',
      },
      fontFamily: {
        jp: ['"Noto Serif JP"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'sakura-fall': 'sakuraFall 15s linear infinite',
        'lantern-float': 'lanternFloat 6s ease-in-out infinite',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
      },
      keyframes: {
        sakuraFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
        lanternFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;