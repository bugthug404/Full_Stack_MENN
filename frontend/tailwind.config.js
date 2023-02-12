/** @type {import('tailwindcss').Config} */
// const relicUIConfig = require("./node_modules/@scaptorcom/relic-ui-react/tailwind.config.js");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/@scaptorcom/relic-ui-react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   ...relicUIConfig.theme.extend.colors,
      // },
    },
  },
  plugins: [],
};
