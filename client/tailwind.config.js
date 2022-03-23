// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      sans: ["Archivo", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
