const path = require('path');

module.exports = {
  configureWebpack: {
    devtool: 'cheap-eval-source-map',
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    },
    resolve: {
      alias: {
        '@global-vue-components': path.join(__dirname, 'src', 'components', 'global'),
        '@vue-components': path.join(__dirname, 'src', 'components'),
        '@global-modules': path.join(__dirname, 'src', 'lib', 'main', 'module'),
        '@views': path.join(__dirname, 'src', 'views'),
        '@css': path.join(__dirname, 'src', 'assets', 'css')
      }
    }
  }
}