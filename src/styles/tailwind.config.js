module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    fontFamily: {
      sans: ["Gotham A", "Gotham B", "Verdana"],
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    }
  },
  plugins: [],
};