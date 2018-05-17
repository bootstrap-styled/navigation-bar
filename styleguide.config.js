const path = require('path');
const { config } = require('rollup-documentation/lib/styleguide.config');

module.exports = {
  ...config,
  require: [path.resolve(__dirname, 'styleguide/setup.js')],
  showCode: false,
  showUsage: true,
};
