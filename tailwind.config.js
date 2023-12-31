/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        hammersmith: ['Hammersmith One', "sans-serif"],
        signika: ['Signika', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/rakib.jpg')",
      }
    },
  },
  plugins: [],
}

