/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-light': "url('/src/images/bg-desktop-light.jpg')",
        'mobile-dark': "url('/src/images/bg-desktop-dark.jpg')"
      },
      letterSpacing: {
        'lg': '.5em'
      },
      padding:{
        '05': '.2em'
      },
      fontFamily: {
        'josefin': "'Josefin Sans', sans-serif"
      },
      backgroundColor: {
        'dark': "hsl(235, 21%, 11%)",
        'dark-100': "hsl(235, 24%, 19%)"
      }
    },
  },
  plugins: [],
}
