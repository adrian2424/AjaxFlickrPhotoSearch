var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

app.get("/", function (req, res){
	res.send("Welcome to NodeJS App on Heroku!");
});
app.listen(port);