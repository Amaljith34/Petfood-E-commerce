/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('https://tse3.mm.bing.net/th?id=OIP.NCQp6CNCoK_LEIV6X6Mp_AHaEv&pid=Api&P=0&h=180')",
      },
    },
  },
  plugins: [],
}

