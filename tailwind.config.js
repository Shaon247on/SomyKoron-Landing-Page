/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['"Lexend Deca"', 'sans-serif'], 
      },
      backgroundImage: {
        'banner': "url('/src/assets/Images/vector.jpg')",
      },
    },
  },
  plugins: [require('daisyui'), require('tailwind-scrollbar')],
}

