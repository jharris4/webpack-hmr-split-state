var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var compression = require('compression');
var express = require('express');
var http = require('http');
var fs = require('fs');
var appConfig = require('./config');

var app = express();
var port = 3131;
var mode = process.env.NODE_ENV || 'development';
var isDev = mode !== 'production';
var hot = isDev;
var compress = !isDev;

var indexPath = path.resolve(__dirname, appConfig.outputPath, appConfig.indexFilename);

var staticMap = {};
if (!isDev) {
  staticMap[appConfig.publicPath] = '/' + appConfig.outputPath;
}

var compiler, middleware;
if (isDev) {
  compiler = webpack(webpackConfig);
  middleware = webpackDevMiddleware(
    compiler,
    {stats: 'errors-only', noInfo: true, publicPath: webpackConfig.output.publicPath, index: appConfig.indexFilename}
  );
  app.use(middleware);
  if (hot) {
    app.use(webpackHotMiddleware(compiler));
  }
}

if (compress) {
  app.use(compression());
}

for (var staticPath in staticMap) {
  if( staticMap.hasOwnProperty(staticPath) ) {
    app.use(staticPath, express.static(__dirname + staticMap[staticPath]));

    // Make sure we generate 404 responses for any unfound static assets so we can test error cases
    app.use(staticPath, function(req, res) {
      res.status(404).send('File Not Found');
    });
  }
}

if (isDev) {
  app.use(function (req, res, next) {
    req.url = appConfig.publicPath;
    return middleware(req, res, next);
  });
}
else {
  app.use(function (req, res, next) {
    res.sendFile(indexPath);
  });
}

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("===> Listening on port %s in %s mode. Open up http://localhost:%s/ in your browser.", port, mode, port);
  }
});