
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://175.24.128.73:50003',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api': '',
      },
      onProxyReq: (proxyReq) => {
        console.log('Proxy Request:', proxyReq.path);
      },
      onError: (err) => {
        console.error('Proxy Error:', err);
      }
    })
  );
};
