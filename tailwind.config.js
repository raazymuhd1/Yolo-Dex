/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": '#040208',
        "mainAlt": "#111111",
        "secondary": "#232323",
        "secondaryAlt": "#551921",
        "textWhite": "#fff",
        "textOrange": "#ff5c57"
      }
    },
  },
  plugins: [],
}