/** @type {import('tailwindcss').Config} */

const { createThemes } = require('tw-colors');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#eee',
        },
      }
    },
  },
  plugins: [
    createThemes({
      dark: {
        base: '#000',
        "text-base": '#e2e2e2',
        "bg-base": "#000",
      },
      light: {
        base: '#f1f1f1',
        "text-base": '#2e2e2e',
        "bg-base": "#f1f1f1",
      }
    })
  ],
}

