/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        darkBlue: "#0a192f",
        lightGray: "#ccd6f6",
        teal: "#64ffda",
        quickSilver: "#a6a092",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        fadeInDelay1: "fadeIn 1s ease-in-out 0.5s forwards",
        fadeInDelay2: "fadeIn 1s ease-in-out 1s forwards",
        fadeInDelay3: "fadeIn 1s ease-in-out 1.5s forwards",
      },
    },
  },
  plugins: [],
};
