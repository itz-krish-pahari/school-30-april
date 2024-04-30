/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#283674',
      },
      fontFamily: {
        'albert': ["Albert Sans", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

