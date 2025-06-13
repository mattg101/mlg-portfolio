
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0d0d0d',
        text: '#faf8f7',
        lava: '#ff6a2d',
        ice: '#5bc0eb',
      },
      fontFamily: {
        sans: ['Geist Sans', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      backgroundImage: {
        hero: 'linear-gradient(135deg, #ff6a2d 0%, #5bc0eb 100%)',
      },
    },
  },
  plugins: [],
};
