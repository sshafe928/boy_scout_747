/** @type {import('tailwindcss').Config} */
export default {
content: ["./src/**/*.{html,js,jsx}"],
theme: {
    extend: {
      colors: {
          'brand-primary-black': '#100102',
          'brand-primary-gold': '#EDC736',
          'brand-primary-brown': '#784B33',
          
          'brand-accent-brown': '#502F18',
          'brand-accent-brown-light': '#80604f',
          'brand-accent-warm': '#EEBA00',
          'brand-accent-light': '#FFE995',
          'brand-accent-yellow': '#F8F3E1',
      },
      fontFamily: {
        'Tienne': ['Tienne', 'Times New Roman', 'Times', 'serif', 'system-ui'],
        'Inter': ['Inter', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif', 'system-ui'],
      },
      boxShadow: {
        'defaultShadow': '0, 10, 10, 0, rgb(0, 0, 0)'
      },
      translate: {
        'neg-full': '-100%'
      },
      blur: {
        xs: '2px',
      },
      boxShadow: {
        'defaultShadow': '0, 10, 10, 0, rgb(0, 0, 0)'
      },
      translate: {
        'neg-full': '-100%'
      }
    },
  },
  plugins: [],
}