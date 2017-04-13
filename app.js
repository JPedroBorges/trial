var express = require('express');
var app = express();
var logger = require('./logger');
var counties = require('./routes/counties');
var weather = require('./routes/weather');

app.use(logger);
app.use('/counties', counties);
app.use('/weather', weather);

app.get('/', function(request, response){
	response.status(200).json("Welcome to our useful API");
});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});
