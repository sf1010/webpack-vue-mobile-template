module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375, // (Number) The width of the viewport.
      viewportUnit: 'vw', // (String) Expected units.
      selectorBlackList: ['.ignore'], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
    },
  },
};
