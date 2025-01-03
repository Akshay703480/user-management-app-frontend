/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //add text fonts here
      fontFamily: {
        'popp': ["Sixtyfour", 'serif'],
        'roboto1': ["Lora", 'serif'],
        'Sixtyfour':['Sixtyfour', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
