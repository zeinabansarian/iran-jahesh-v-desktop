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
      'blue-1':'#00A0DD',
      'blue-text':'#0C4DA2',
      'ligh-blue':'#00A0DD33',
      'before-blue':'#00BDF2',
      'lightGay':'#E5E5E5',
      'input':'#A1A1AA',
      'orange':'#FF5C00',
      'White':'#ffff',
      'blue-5':'#0C4DA2',
      'black':'#000000',
      'gray':'#CECECE',
      'gray-2':'#D3DEEC',
      'gray-3':'#A1A1A1'
    },
    fontFamily: {
      'IRANSansWeb(FaNum)700': ['IRANSansWeb(FaNum)700', 'IRANSansWeb(FaNum)700'],
      'IranYekan300': ['IranYekan300', 'IranYekan300'],
      'IranYekan400': ['IranYekan400', 'IranYekan400'],
      'IranYekan500': ['IranYekan500', 'IranYekan500'],
      'IranYekan700': ['IranYekan700', 'IranYekan700'],
      'IRANSansWeb(FaNum)700': ['"IRANSansWeb(FaNum)700"'],
      'IRANSansWeb(FaNum)400': ['"IRANSansWeb(FaNum)400"'],
      'Sahitya400': ['"Sahitya400"'],
      'Biotif700': ['"Biotif700"'], 
     'Biotif300':['Biotif300','Biotif300'],
     'Biotif400':['Biotif400','Biotif400'],
     'Biotif500':['Biotif500','Biotif500'],
     'Biotif700':['Biotif700','Biotif700'],
     'Biotif800':['Biotif800','Biotif800'],
     'Biotif900':['Biotif900','Biotif900'],      
     'SGKara300' :['SGKara300','SGKara300'],
     'SGKara400' :['SGKara400','SGKara400'] ,
     'SGKara700' :['SGKara700','SGKara700'] ,
      

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
         '38.79':'38.79px',
         '87.49':'87.49px',
         '51.82':'51.82px',
         '20.69':'20.69px',
         '27.34':'27.34px',
         '25.04':'25.04px',
       

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