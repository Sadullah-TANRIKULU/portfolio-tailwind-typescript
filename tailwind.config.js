/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        ff:['Kanit', 'Acme'],
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
