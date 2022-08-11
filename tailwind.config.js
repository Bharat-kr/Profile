/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        1: "#160037",
        2: "#0A2A5A",
        3: "#092F68",
        4: "#043D94",
        5: "#063885",
        6: "#004CBF",
        7: "#005996",
        8: "#63D7FF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
