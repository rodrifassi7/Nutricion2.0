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
      },
      colors: {
        'grin': '#4ca770',
        'oransh': '#E77841'
      }
    },
  },
  plugins: [],
}

