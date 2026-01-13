/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": 'rgba(35, 45, 56)',
        "mainAlt": "#111111",
        "secondary": "#232323",
        "secondaryAlt": "#551921",
        "textWhite": "#fff",
        "textOrange": "rgba(251, 100, 111)",
        "orange-bg": "rgba(251, 100, 111)"
      }
    },
  },
  plugins: [],
}