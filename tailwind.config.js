/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'freight': ['freight-sans-pro', 'sans-serif',],
        'brandon': ['brandon-grotesque', 'sans-serif'],
      },
      screens: {
        '3xl': '2100px',
      },
},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

