'use strict';

const validate = require('./validateUser'),
      request = require('request'),
      apigatewayconfig = require('../../aws/apigateway.config.js');


exports.users = function(req,res){
    console.log('GET - /api/user');
    console.log(apigatewayconfig.apiGatewayEndpoints.getUserEndpoint);
    request.get(apigatewayconfig.apiGatewayEndpoints.getUserEndpoint, function(error, response, body){
        console.log("error: ", error);
        console.log("body: ", body);
        res.send(body);
    });
}

exports.register = function(req,res){
    
    console.log('POST - /api/user/register');    
    console.log(apigatewayconfig.apiGatewayEndpoints.registerUserEndpoint);

    request.post({
            url: apigatewayconfig.apiGatewayEndpoints.registerUserEndpoint, 
            form:{}
        }, function(error, response, body){            
        
            console.log("error: ", error);
            console.log("body: ", body);
            res.send(body);
    });
}