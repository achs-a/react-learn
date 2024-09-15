/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx.tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ('Robots', 'sans-serif')
      },
      gridTemplateColumns: {
        '70/30': '70% 30%',
      }
    },
  },
  plugins: [],
}

