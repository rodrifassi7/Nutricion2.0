/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        questrial: ['Questrial', 'sans-serif'],
      custom: ['Dreaming', 'sans-serif'],  
      montserrat: ['Montserrat', 'sans-serif']

      },
      colors: {
        'grin': '#399f3e',
        'oransh': '#e8722a',
        'grei' : '#424140',
        'janaran': '#ecb089',
        'sweetgrin': '#8dcd90',
        'sweetoransh': '#ecb089',



      }
      
    },
  
  },
  plugins: [],
}

