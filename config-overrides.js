const webpack = require('webpack');
module.exports = {
  webpack: function (config, env) {
    config.plugins = [
      ...config.plugins,
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ];
    config.resolve.fallback = {
        buffer: false,
        // crypto: false,
        events: false,
        path: false,
        stream: false,
        string_decoder: false,
        crypto: require.resolve("crypto-browserify"),
        assert: false,
        os: false,
        url: false,
        http: false,
        https: false
    }
    return config;
  },
}