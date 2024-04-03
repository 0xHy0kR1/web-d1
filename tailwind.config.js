/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ArcherusBold': ['archBold'],
        'ArcherusLight': ['archLight'],
      },
      colors: {
        active: '#648fc9',
      },
    },
  },
  plugins: [],
}

