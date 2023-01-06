/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,tsx,png}"],
  theme: {
    fontFamily: {
      dela: ["Dela Gothic One", "cursive"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        cyan: "#5996a5",
        cyandark: "#2b788b",
        cyanlight: "#c3dce3",
        pink: "#a15993",
        pinkdark: "#945069",
        pinklight: "#f2d4dc",
        black: "#000000",
        greyligt: "#f6f5f4",
        greymedium: "#e0e0e0",
        greyicon: "#bababa",
        greydark: "#585858",
        green: "#636b6d",
        red: "#a95151",
        yellow: "#c4a24c",
        orange: "#cb5b43",
      },
    },
  },
  plugins: [],
}
