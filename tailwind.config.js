/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainLight: '#eef0c8',
        mainYellow: '#f8bd2f',
        mainPurple: '#0057FF',
        mainBlack: '#171618',
        lightBlue: '#e4ecfc',
        lightCard: '#4e5c77',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
