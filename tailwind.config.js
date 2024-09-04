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
        'about': "url('/src/assets/drone8.png')",
        'about2': "url('/src/assets/drone82.jpeg')",
      },
      colors: {
        'primary': '#000',
        'secondary': '#CBDEEC',
        'drop': '#F8F8F8'
      },
      gridTemplateColumns: {
        '1111': 'repeat(auto-fit, minmax(17.8rem,1fr))'
      }
    },
  },
  plugins: [],
}