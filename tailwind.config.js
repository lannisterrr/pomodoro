const colors = require('tailwindcss/colors');

module.exports = {
  mod: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#4cc9f0',
        secondary: '#f72585',
      },
    },
  },
  plugins: [],
};
