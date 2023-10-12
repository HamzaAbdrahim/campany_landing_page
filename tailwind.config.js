/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#14121D",
        scondary:"#17245B",
        thered:"#0030FF",
        blacky:"#252525",
        scond_blacky:"#262626",
        light_balck:"#14121E",
        balck_two:"#030303",
        gray_900:"#101010",
        gray_600:"#4B5563",
        light_blue:"#3D96F4",
        gray_700:"#374151",
        blacky_three:"#262626",
        Gray_500:"#3C3C3C",
        gray_scondary:"#939393"
        },
        fontFamily:{
        Poppins: ['Poppins', 'sans-serif'],
        Raleway:['Raleway', 'sans-serif'],
        Inter:['Inter', 'sans-serif'],
        Abril_Fatface:['Abril Fatface' , 'cursive'],
        Manrope: ['Manrope', 'sans-serif'],
        Open_Sans: ['Open Sans', 'sans-serif']
        },
    },
  },
  plugins: [],
}

