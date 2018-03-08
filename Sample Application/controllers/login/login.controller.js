'use strict';

const validate = require('./validateLogin.js');

exports.logIn = function(req, res){
    console.log('POST - /api/login');
    console.log(req);
    res.send("login api");
}

exports.logOut = function(req, res){
    console.log('POST - /api/logout');
    console.log(req);
    res.send("logout api");
}