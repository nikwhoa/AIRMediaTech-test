/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Gilroy Regular', 'sans-serif'],
        bold: ['Gilroy Bold', 'sans-serif'],
        medium: ['Gilroy Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
