var express = require('express');

var app = express();

app.use(express.static(__dirname + '/app'));

var port = process.env.PORT || 8005; // set our port
console.log('listening on port '+port);
app.listen(port);
