export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "430px",
      md: "768px",
      lg: "1000px",
      xl: "1350px",
      "2xl":"1580px",
    },
    extend: {
      colors: {
        primary: "#ff6900",
        secondary: "rgb(235,178,55)",
        black: "#151419",
        gray: "#878787",
        gray2: "#262626",
        gray3: "#1b1b1e",
        whiteCustom:"#DEDEDE"
      },
      fontFamily: {
        title: ["Orbitron", "sans-serif"],
        text: ["Funnel Display", "serif"],
        text2: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};