(function (){
  'use strict';

  var async     = require("async")
    , express   = require("express")
    , request   = require("request")
    , endpoints = require("../endpoints")
    , helpers   = require("../../helpers")
    , app       = express()

  app.get("/reviews", function (req, res, next) {
    var url = endpoints.reviewsUrl + req.url.toString();
    request.get(url).pipe(res);
  });

  app.get("/reviews/*", function (req, res, next) {
    var url = endpoints.reviewsUrl + req.url.toString();
    request.get(url).pipe(res);
  });

  app.post("/reviews", function (req, res, next) {
    console.log("Request received with body: " + JSON.stringify(req.body));
    var url = endpoints.reviewsUrl + req.url.toString();
    request.post(url, { form: JSON.stringify(req.body)}).pipe(res);
  });


  module.exports = app;
}());
