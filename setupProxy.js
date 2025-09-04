const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://175.24.128.73:50003',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
};
