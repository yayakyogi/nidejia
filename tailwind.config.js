/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}", "./dist/**/*.{css}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF9357",
        black: "#141414",
        black2: "#202020",
        grey: "#323437",
        white: "#FFFFFF",
        slate: "#A8A8AB",
      },
      borderRadius: {
        20: "20px",
      },
      lineHeight: {
        45: "45px",
      },
    },
  },
  plugins: [],
};
