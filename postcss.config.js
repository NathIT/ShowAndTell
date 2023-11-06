module.exports = {
  plugins: [
    require('autoprefixer')([
      'defaults',
      'iOS >= 7',
      'Android >= 4.1',
      'last 2 versions',
      'not dead',
      '> 1%',
      'IE 11',
    ]),
  ],
};
