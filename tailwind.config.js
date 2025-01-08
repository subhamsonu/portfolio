/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        darkBlue: "#0a192f",
        lightGray: "#ccd6f6",
        teal: "#64ffda",
      },
    },
  },
  plugins: [],
}

