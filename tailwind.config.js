/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{njk,md}",
    "./src/**/*.{njk,md}",
    "./src/__includes/*.{njk,md}",
    "./src/__includes/**/*.{njk,md}",
  ],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Arial Black", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
