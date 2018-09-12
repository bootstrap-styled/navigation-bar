const path = require('path');
const { default: createConfig } = require('@yeutech-lab/rollup-umd-documentation/lib/styleguide.config');

module.exports = createConfig({
  require: [path.resolve(__dirname, 'styleguide/setup.js')],
  showCode: false,
  showUsage: true,
});
