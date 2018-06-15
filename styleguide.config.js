const path = require('path');
const { default: createConfig } = require('@yeutech/rollup-documentation/lib/styleguide.config');

module.exports = createConfig({
  require: [path.resolve(__dirname, 'styleguide/setup.js')],
  showCode: false,
  showUsage: true,
});
