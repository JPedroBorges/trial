var express = require('express');
var app = express();

app.get('/', function(request, response){
	response.status(201).json("Welcome to our useful API");
});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});
