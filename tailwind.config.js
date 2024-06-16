/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '93vh': '93vh'
      },
      boxShadow: {
        '3xl': "inset 120px 100px 250px #000000 , inset -120px -100px 250px #000000"
      }
    },
  },
  plugins: ['.prettierrc'],
}

