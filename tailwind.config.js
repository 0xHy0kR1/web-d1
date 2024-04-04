/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  plugins: [
    // ...
    require("flowbite/plugin"),
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

