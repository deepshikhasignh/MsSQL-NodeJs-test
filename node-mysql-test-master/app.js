// Generated by CoffeeScript 1.10.0
(function() {
  var app, assets, express, http, port, server;

  http = require('http');

  express = require('express');

  assets = require('connect-assets');

  app = express();

  app.configure(function() {
    app.use(assets({
      src: __dirname + '/public'
    }));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express["static"](__dirname + '/public'));
    app.use(app.router);
    return app.set('views', 'views');
  });

  app.get('/', function(req, res) {
    var msg;
    msg = require('./Message');
    return msg.getText(function(text) {
      var message;
      message = text;
      return res.render('index.jade', {
        message: message
      });
    });
  });

  server = http.createServer(app);

  port = 8020;

  server.listen(port);

  console.log('Server running at http://127.0.0.1:' + port);

}).call(this);
