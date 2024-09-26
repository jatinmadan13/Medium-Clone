/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': [ "PT Serif", 'serif'],
        'secondary': ['Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        brandGreen: "#36a243",
        royalGreen: "#B4e5a2"
      }
    },
  },
  plugins: [],
}