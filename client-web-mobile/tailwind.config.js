const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: { light: colors.blue[800], DEFAULT: colors.blue[800] },
        'primary-focus': { light: colors.blue[900], DEFAULT: colors.blue[900] },
        'primary-content': {
          light: colors.blue[100],
          DEFAULT: colors.blue[100],
        },
        secondary: { light: '#7542F5', DEFAULT: '#7542F5' },
        'secondary-focus': { light: '#5016E3', DEFAULT: '#5016E3' },
        'secondary-content': { light: '#1F2937', DEFAULT: '#1F2937' },
        accent: { light: '#3D4C9B', DEFAULT: '#3D4C9B' },
        'accent-focus': { light: '#273C95', DEFAULT: '#273C95' },
        'accent-content': {
          light: colors.blue[100],
          DEFAULT: colors.blue[100],
        },
        neutral: { light: '#F36F63', DEFAULT: '#F36F63' },
        'neutral-focus': { light: '#E75D51', DEFAULT: '#E75D51' },
        'neutral-content': {
          light: colors.blue[100],
          DEFAULT: colors.blue[100],
        },
        'base-100': { light: '#FFFFFF', DEFAULT: '#FFFFFF' },
        'base-200': { light: '#F5F5F5', DEFAULT: '#F5F5F5' },
        'base-300': { light: '#D1D5DB', DEFAULT: '#D1D5DB' },
        'base-content': { light: '#1F2937', DEFAULT: '#1F2937' },
        info: { light: '#66C7FF', DEFAULT: '#66C7FF' },
        success: { light: '#87D039', DEFAULT: '#87D039' },
        warning: { light: '#E2D562', DEFAULT: '#E2D562' },
        error: { light: '#FF6F6F', DEFAULT: '#FF6F6F' },
      },
    },
  },
  variants: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
};
