/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            900: "#00293D",
            800: "#004466",
            700: "#006DA3",
            600: "#0096E0",
            500: "#0AADFF",
            400: "#47C2FF",
            300: "#85D6FF",
            200: "#C2EBFF",
            100: "#EBF8FF",
          },
          green: {
            900: "#062900",
            800: "#0C5200",
            700: "#18A300",
            600: "#22E000",
            500: "#39FF14",
            400: "#74FF5C",
            300: "#97FF85",
            200: "#BAFFAD",
            100: "#EEFFEB",
          },
        },
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
      },
    },
  },
  plugins: [],
};
