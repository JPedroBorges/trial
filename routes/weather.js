var express = require('express');
var request = require('request');

var router = express.Router();

var urlbase = "http://api.openweathermap.org/data/2.5/";
var urlend =  ",PT&lang=pt&units=metric&appid=ab7d16bf7e2944df78b8a63317ddf45f";

function getJSON(url, callback){
  request({
    url: url,
    json: true
  }, function (error, response, body){
    if (!error && response.statusCode === 200) {
      callback(body);
    }
  });
}
router.get('/:county', function(request, response){
	var url = urlbase + "forecast?q=" + request.params.county + urlend;

	getJSON(url, function (body){
		response.status(200).json(body);
	});
});
router.get('/:county/daily', function(request, response){
	var url = urlbase + "weather?q=" + request.params.county + urlend;

	getJSON(url, function (body){
		response.status(200).json(body.main.temp);
	});
});

module.exports = router;
