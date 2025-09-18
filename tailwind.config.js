/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
};