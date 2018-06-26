 'use strict';

var port = process.env.PORT || 8000;

 var http = require('http');
 var express = require('express');
 var bodyParser = require('body-parser');
 var swaggerize = require('swaggerize-express');
 var swaggerUi = require('swaggerize-ui'); // change one
 var path = require('path');

 var app = express();

 var server = http.createServer(app);

 app.get('/test',function(req,res){
     res.send("test...");
    });

 app.use(bodyParser.json());

 app.use(swaggerize({
     api: path.resolve('./config/api.json'), // change two
     handlers: path.resolve('./handlers'),
     docspath: '/swagger/docs/v1' // change three
 }));

 // change four
 app.use('/swagger', swaggerUi({
   docs: '/swagger/docs/v1'  
 }));

 server.listen(port, function () {
     app.setHost(undefined); // change five
 });