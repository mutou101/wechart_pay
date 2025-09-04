module.exports = {
    // ...
    devServer: {
      proxy: {
        '/api': {
          target: 'http://example.com', // 目标服务器地址
          changeOrigin: true, // 是否改变源地址
          pathRewrite: {'^/api': ''} // 重写请求路径
        }
      }
    }
  };