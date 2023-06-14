/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Inter": ['Inter, sans-serif'],
        "Cinzel": ['Cinzel, serif'],
        "Railway": ['Raleway, sans-seri']
      }
    },
  },
  plugins: [require("daisyui")],
}