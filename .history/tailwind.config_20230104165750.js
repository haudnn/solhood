/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,tsx}"],
  theme: {
    fontFamily: {
      dela: ["Dela Gothic One", "cursive"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        cyandesign: "#5996a5",
        cyandark: "#2b788b",
        cyanlight: "#c3dce3",
        pinkdesign: "#a15993",
        pinkdark: "#945069",
        pinklight: "#f2d4dc",
        black: "#000000",
        greyligt: "#f6f5f4",
        greymedium: "#e0e0e0",
        greyicon: "#bababa",
        greydark: "#585858",
        greendesign: "#639b6d",
        secondgreendesign: "#cbdacc",
        reddesign: "#a95151",
        yellowdesign: "#c4a24c",
        orangedesign: "#cb5b43",
        secondorangedesign: "#eac7bf",
      },
    },
  },
  plugins: [],
}
