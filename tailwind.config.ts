
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0a0a12',
        lavender: '#c7b8ff',
        accent:   '#ff7043',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        hero: 'url(/hero.jpg)',
      },
    },
  },
  plugins: [],
};
