/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      abeezee: ['ABeeZee', 'sans-serif'],
      inter: ['Inter' , 'sans-serif'],
    
    },

    colors : {
      
      white : "#ffffff",
      black : "#000000",
      'light-black' : '#443B3B',
      'primary-blue' : '#3C3583',
      'secondary-blue' : '#393285',

    },

    screens: {
      dxs: '300px',
      // => @media (min-width: 300px) { ... }

      xxs: '400px',
      // => @media (min-width: 400px) { ... }

      xsm: '458px',
      // => @media (min-width: 458px) { ... }

      xs: '500px',
      // => @media (min-width: 500px) { ... }

      ssm: '600px',
      // => @media (min-width: 640px) { ... }
      
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      smd: '800px',
      // => @media (min-width: 800px) { ... }

      mmd: '860px',
      // => @media (min-width: 860px) { ... }

      xmd: '930px',
      // => @media (min-width: 930px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xlg: '1110px',
      // => @media (min-width: 1110px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      xxl: '1390px',
      // => @media (min-width: 1390px) { ... }
      xxxl : '1490px',
  // => @media (min-width: 1490px) { ... }
    },




    extend: {},
  },
  plugins: [],
}