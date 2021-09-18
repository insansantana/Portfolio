module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      margin:{
        '5vh':'5vh'
      },
      minHeight: {
        '90':'90vh',
      }, 
      textColor: {
        'primary': '#CDD6E2',
        'skills':'#6E757E',
        'react':'#5ED3F3'
      },
      backgroundColor:{
        'primary':'#0D1117',
        'navy':'#dde8fc',
        'darker':'#161B22'
      },
      fontFamily:{
        'primary':['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New'],
        'righteous':["Righteous",'cursive']
      },   
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
