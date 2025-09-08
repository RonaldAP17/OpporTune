/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./*.html",
  ],
  theme: {
    extend: {
      colors:{
        'main-blue': '#13489cff',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
      },
      spacing: {
        '100': '25rem', 
      },
    },
  },
  plugins: [],
}

