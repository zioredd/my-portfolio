/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px", // Small screens
      },
      fontFamily: {
        bebas: ["BebasNeue-Regular", "sans-serif"],
        montserat: ["Montserrat", "sans-serif"],
        druk: ["DrukText-Bold-Trial", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        major: ["Major Mono Display", "monospace"],
      },
    },
  },
  plugins: [],
};
