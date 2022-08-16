/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        grad1: "linear-gradient(91.36deg, #043D94 0.34%, #63D7FF 107.63%)",
      },
      boxShadow: {
        shad1: "4px 4px 20px 10px rgba(1, 71, 176, 0.1)",
        shad2: "4px 4px 30px 20px rgba(1, 71, 176, 0.1)",
      },
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
