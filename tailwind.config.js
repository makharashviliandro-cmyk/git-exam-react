/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#a07b5b",
        backg: "#151515",
        txtgr: "#929292",
      },
      fontFamily: {
        fontgeo: ['Noto Sans Georgian'],
      }
    },
  },
  plugins: [],
}
