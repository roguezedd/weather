require('dotenv').config();
var express = require('express');
var request = require('request');
var router = express.Router();
var fs = require('fs');
var mockLocation = fs.readFileSync('./routes/mock/location.json', { encoding: 'utf8' });
var mockApi = process.env.npm_config_mockApi === "true";

var BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + process.env.GOOGLE_AUTH;

function makeRequest(options, req, res) {
  request(options
    , function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.status(200).send(body);
      } else {
        console.log(error);
        console.log(response.statusCode);
        res.status(response.statusCode).send(body);
      }
    }
  );
}

router.get('/address/:latlong', function(req, res) {

  var options, params;

  params = req.params;

  res.set({'Content-Type': 'application/json'});

  options = {
    method: 'get',
    uri: BASE_URL + '&latlng=' + params.latlong
  };

  if(mockApi){
    console.log('Mocking API');
    res.status(200).send(mockLocation);
  } else {
    makeRequest(options, req, res);
  }

});

module.exports = router;