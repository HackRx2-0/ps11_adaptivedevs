module.exports = {
  purge: [
    './pages/**/*.{ts, tsx, js, jsx}',
    './components/**/*.{ts, tsx, js, jsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
};
