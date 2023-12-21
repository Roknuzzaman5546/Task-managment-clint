/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        styls: "'Sevillana', cursive",
        alfa: "'Alfa Slab One', serif",
        lobester: "'Lobster Two', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

