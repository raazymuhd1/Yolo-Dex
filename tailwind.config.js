/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": '#cd85af',
        "secondary": "#eb0e8f"
      }
    },
  },
  plugins: [],
}