/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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

      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.teal[600]'),
            code: {
              backgroundColor: theme("colors.stone.200"),
              color: theme('colors.slate[700]'),
              fontWeight: "400",
              "border-radius": "0.25rem",
              "padding": "0.2rem 0.4rem",
              "margin-inline": "0.1rem",
              "font-family": '"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace',
            },
          },
        },
      }),
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

