export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "430px",
      md: "768px",
      lg: "1000px",
      xl: "1350px",
      "2xl": "1650px",
    },
    extend: {
      colors: {
        redCustom: "#BA3736",
        whiteCustom: "#FFFFFF",
        blackCustom: "#2D2D2D",
        grayCustom: "#878787",
      },
      fontFamily: {
        title: ["Inter", "sans-serif"],
        text: ["Raleway", "serif"],
        text2: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
