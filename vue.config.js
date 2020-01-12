const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
//server渲染
const serverConfig = {
  entry: './src/entry-server.js',
  target: 'node',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
  },
  externals: nodeExternals({
    whitelist: /\.css$/,
  }),
  optimization: {
    splitChunks: false,
  },
  plugins: [
    new VueSSRServerPlugin(),
  ],
};
//cilent 渲染
const cilentConfig = {
  entry: './src/entry-client.js',
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    // This plugins generates `vue-ssr-client-manifest.json` in the
    // output directory.
    new VueSSRClientPlugin(),
  ],
};

module.exports = {
  outputDir: 'public',
  configureWebpack: process.env.TARGET_ENV === 'server' ? serverConfig : cilentConfig,
};
