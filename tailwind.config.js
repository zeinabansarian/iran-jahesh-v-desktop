/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './**/*.{html,js}',
    './css/**/*.css',
    './js/**/*.js',
  
  ],
  darkMode: 'class',

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue-4':'#2BC0DD',
      'blue-3':'#003B8E',
      'blue-2':'#01073F',
      'blue-text':'#0C4DA2',
      'ligh-blue':'#00A0DD33',
      'White':'#ffff',
    },
    fontFamily: {
      'IRANSansWeb(FaNum)700': ['IRANSansWeb(FaNum)700', 'IRANSansWeb(FaNum)700'],
      'IRANYekan300': ['IRANYekan300', 'IRANYekan300'],
      'Biotif700': ['Biotif700', 'Biotif700'],
     
    
        
    },
  
    
  
    extend: {
      spacing: {
        '1.5': '1.5em',
        
      },
      lineHeight: {
        '18.78': '18.78px',
        '64': '64px',
        '23':'23px',
        '25.4':'25.04px',
        '57.97':'57.97px',
        '48.36': '48.36px',
        '17.96': '17.96px',
        '21.91': '21.91px',
        '32.03':'32.03px',
        '56.35':'56.35px',
        '25.04':'25.04px',
        '37.97':'37.97px',
        '34.55':'37.57px',
        '31.03':'31.03px',
        '28.17':'28.17px',
        '18.78':'18.78px',
         '20.25':'20.25px',
         '24':'24px',
         '46.96':'46.96px',
         '16.41':'16.41px',
         '14.06':'14.06px',
         '30':'30px',
         '31.09':'31.09px',
         '21':'21px',
         '21.97':'21.97px',
         '20.73':'20.73px',
         '41.45':'41.45px',
         '24.18':'24.18px',
         '27.64':'27.64px',
       

      },

      width:{
        '85p':'85%',
        '90p':'90%',
      },
      maxWidth: {
        'x100': '100%',
      },
      fontSize: {
        'f1':'20px',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',

      }
    },
    translate: {
      '100': '-100%',
    }
  },
  
  
}