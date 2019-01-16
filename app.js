//Express filestream
var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/contact', function(req, res){
    res.sendFile(path.join(__dirname + '/contact.html'));
});
//sets up server
app.use('/', router);
app.listen(process.env.port || 3000);
console.log("Running on port 3000");