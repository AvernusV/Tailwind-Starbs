/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
            'puti':'#ffffff',
            'putid':'#F1F8F5',
            'putik':'#F2F0EB',
            'maitim':'#2b2b2b',
            'lasalle':'#006341',
            'drklsle':'#1E3932',
            'lightg':'#D4E9E2',
            'gold':'#CBA258',
            'semento':'hsl(240,1.51%,50.98%)'
           },
           backgroundImage:{
              'swirl':"url('../img/rewards/greenbg.webp')"
      }
    },
  },
  plugins: [],
}


