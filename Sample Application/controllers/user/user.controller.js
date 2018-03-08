'use strict';

const validate = require('./validateUser');


exports.users = function(req,res){
    console.log('GET - /api/user');
    console.log(req);
    res.send("users api");
}

exports.register = function(req,res){
    console.log('POST - /api/user/register');
    console.log(req);
    res.send("users register api");
}