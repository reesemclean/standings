/*eslint no-console:0 */
'use strict';

require('dotenv').config();

var isProduction = process.env.NODE_ENV === 'production';

var express = require('express');
var app = express();
const config = require('./webpack.config');

var port = process.env.PORT || config.port

if (!isProduction) {

  const webpackPort = config.webpackPort

  var proxy = require('proxy-middleware');
  var url = require('url');

  app.use('/assets', proxy(url.parse('http://localhost:' + webpackPort + '/assets')));

  require('core-js/fn/object/assign');
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const open = require('open');

  var server = new WebpackDevServer(webpack(config), config.devServer)
  server.listen(webpackPort, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + config.port);
    console.log('Opening your system browser...');
    open('http://localhost:' + port);
  });

}

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port);
