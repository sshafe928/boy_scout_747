
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
        'brand-accent-warm': '#EEBA00',
        'brand-accent-light': '#FFE995',
      },
      fontFamily: {
        'Tienne': ['Tienne', 'Times New Roman', 'Times', 'serif', 'system-ui'],
        'Inter': ['Inter', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif', 'system-ui']
      },
      boxShadow: {
        'defaultShadow': '0, 4, 4, 0, rgba(0, 0, 0, 0.25)'
      },
      backgroundImage:{
        "globalSVG" : "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'><rect fill='#EDC736' width='1600' height='900'/><polygon fill='#6d442f'  points='957 450 539 900 1396 900'/><polygon fill='#462d18'  points='957 450 872.9 900 1396 900'/><polygon fill='#704630'  points='-60 900 398 662 816 900'/><polygon fill='#482d18'  points='337 900 398 662 816 900'/><polygon fill='#734831'  points='1203 546 1552 900 876 900'/><polygon fill='#4b2e18'  points='1203 546 1552 900 1162 900'/><polygon fill='#754932'  points='641 695 886 900 367 900'/><polygon fill='#4d2e18'  points='587 900 641 695 886 900'/><polygon fill='#784b33'  points='1710 900 1401 632 1096 900'/><polygon fill='#502f18'  points='1710 900 1401 632 1365 900'/><polygon fill='#7b4d34'  points='1210 900 971 687 725 900'/><polygon fill='#522f18'  points='943 900 1210 900 971 687'/></svg>"
      }
    },
  },
  plugins: [],
}
