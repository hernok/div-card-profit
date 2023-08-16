const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://poe.ninja",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api/data",
      },
    })
  );
};
