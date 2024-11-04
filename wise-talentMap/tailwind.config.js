/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Asegúrate de que los archivos Vue estén incluidos
  ],
  theme: {
    extend: {
      scale: {
        '-100': '-1',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      colors: {
        primary: {
          pink: '#FC00FF',
          violet: '#881BF5',
        },
        secondary: {
          blue: '#5478E3',
          turquoise: '#17E4CE',
          white: '#FAFAFA',
        },
        red: '#FF0606',
        lightGreen: '#D5F7D4',
        lightPink: '#FBC4EC',
        lightGray: '#F5F5F5',
        softGray: '#E0E0E0',
        mediumGray: '#BDBDBD',
        darkGray: '#757575',
        deepGray: '#424242',
        anthraciteGray: '#212121',
      },
      backgroundImage: {
        fourColors:
          'linear-gradient(45deg, #FC00FF, #881BF5, #5478E3, #17E4CE)',
        twoColors: 'linear-gradient(45deg, #FC00FF, #881BF5)',
        twoColorsBlue: 'linear-gradient(90deg, #881BF5, #5478E3)',
        radialGradient: 'radial-gradient(circle,  #FAFAFA, #212121)',
      },
      borderRadius: {
        xs: '4px',
        md: '8px',
        lg: '24px',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        lato: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

