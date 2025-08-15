module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    {
      pattern: /slick-.*/, // keep all slick-carousel classes
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
