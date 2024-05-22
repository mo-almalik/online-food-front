/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main': '#EB5757'
      },
      screens:{
        sm: '576px',
        md:' 768px',
        lg:' 992px',
        xl: '1200px',
        xxl: '1400px'
      }
    },
  },
  plugins: [],
}