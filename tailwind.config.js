/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          sm:"1rem"
        }
      },
      colors:{
        green:"rgb(26,69,60)",
        yellow:"rgb(223,208,81)"
      },
    },
  },
  plugins: [],
}