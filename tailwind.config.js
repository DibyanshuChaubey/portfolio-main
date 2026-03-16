/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },

    extend: {
      fontFamily: {
        primary: "var(--font-geist-mono)",
      },
      colors:{
        primary: "#202a45",
        accent:{
          DEFAULT: "#7c6cff",
          hover: "#6656f5",
        },
      }
    },
  },
  plugins: [],
};

