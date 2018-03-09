'use strict';

const validate = require('./validateLogin.js'),
    request = require('request'),
    apigatewayconfig = require('../../aws/apigateway.config.js');

exports.logIn = function(req, res) {
    console.log('POST - /api/login');
    console.log(apigatewayconfig.apiGatewayEndpoints.loginEndpoint);

    request.post({
        url: apigatewayconfig.apiGatewayEndpoints.loginEndpoint,
        form: JSON.stringify(req.body)
    }, function(error, response, body) {

        console.log("error: ", error);
        console.log("body: ", body);
        res.send(body);
    });
}

exports.logOut = function(req, res) {
    console.log('POST - /api/logout');
    console.log(req);
    res.send("logout api");
}