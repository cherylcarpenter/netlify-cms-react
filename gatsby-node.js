const path = require('path');

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

// typescript files
exports.createPages = require('./src/createPages/createPages').createPages;

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@static': path.resolve(__dirname, 'static'),
        '@cms': path.resolve(__dirname, 'src/cms'),
      },
    },
  });
};
