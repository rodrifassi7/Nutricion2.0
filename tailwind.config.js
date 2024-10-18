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
      custom: ['Dreaming', 'sans-serif'],  // Usa el nombre que asignaste en @font-face

      },
      colors: {
        'grin': '#399f3e',
        'oransh': '#e8722a'
      }
      
    },
  
  },
  plugins: [],
}

