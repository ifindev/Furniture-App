/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#4F63AC',
        },
        orange: {
          DEFAULT: '#FCA34D',
        },
      },
    },
  },
  plugins: [],
};
