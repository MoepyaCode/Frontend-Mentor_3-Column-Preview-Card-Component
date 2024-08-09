/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        'lexend': ['Lexend Deca', 'sans-serif'],
        'big-shoulders': ['Big Shoulders Display', 'sans-serif'],
      }
    },
  },
  plugins: [],
}