/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero.jpeg')",
        'about': "url('/src/assets/drone8.png')"
      },
      colors: {
        'primary': '#000',
        'secondary': '#CBDEEC',
        'drop': '#F8F8F8'
      }
    },
  },
  plugins: [],
}