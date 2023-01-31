/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 0%, 98%)",
        Secondary: "hsl(0, 0%, 41%)",
        dark: "hsl(0, 0%, 8%)"
      },
      fontFamily: {
        Epilogue: ['Epilogue', 'sans-serif'],
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}