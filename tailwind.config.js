/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.njk"],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Arial Black", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
