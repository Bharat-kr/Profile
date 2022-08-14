/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        c0: "#10161f",
        c1: "#160037",
        c2: "#0A2A5A",
        c3: "#092F68",
        c4: "#043D94",
        c5: "#063885",
        c6: "#004CBF",
        c7: "#005996",
        c8: "#63D7FF",
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
