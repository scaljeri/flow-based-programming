const concat = require('concat');

(async function build() {
  const files = [
    './dist/fbp-elements/main-es5.js',
    './dist/fbp-elements/runtime-es5.js',
    './dist/fbp-elements/polyfills-es5.js',
    './dist/fbp-elements/styles-es5.js',
    './dist/fbp-elements/vendor-es5.js'
  ]
  await concat(files, './dist/fbp-bundle.js');
})()
