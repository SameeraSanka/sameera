/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
        myOrange : "#ff4d20",
        myBlue: "#1f2234",
        myBlack : "#242D49",
        myWhite : "#f7f7f7",
        myGray : "#788097",
        blueCard : "#DDF8FE",
        purple: "rgb(255, 237, 210)",
        boxShadow : "0px 19px 60px rgb(0 0 0 / 8%)",
        orangeCard: "rgba(252, 166, 31, 0.45)",
        smboxShadow: "-79px 51px 60px rgba(0, 0, 0, 0.08)",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
};