/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
    },
    extend: {
      colors: {
        ghostWhite: "#f8f8ff",
        grey: "#9f9fa0",
        blue: "#0369A1",
        purple: "#a435f0",
        green: "#04AA6D",
      },
      boxShadow: {
        heroSadow: "0px 0px 16px rgba(0,0,0,0.15)",
      },
      fontFamily: {
        Poppins: ['Poppins', "sans-serif"],
        LobsterTwo: ["Lobster Two", "serif"]
      },
    },
  },
  plugins: [],
};
