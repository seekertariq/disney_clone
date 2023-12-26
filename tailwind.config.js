/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors:{
        mainbg: '#1A1D29'
      }
    },
  },
  plugins: [
    /*eslint-env node*/
    require('tailwind-scrollbar-hide')
  ],
}