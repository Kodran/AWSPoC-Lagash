'use strict';
const
	controller = require('./controllers/controller.manager'),
	fs = require('fs');	

module.exports = function(app){

	app.get('/', function(req, res, next){
		res.writeHead(200);
		res.write(fs.readFileSync(__dirname + '/views/index.html'));
		res.end();
	})
	app.get('/login', function(req, res, next){
		res.writeHead(200);
		res.write(fs.readFileSync(__dirname + '/views/login.html'));
		res.end();
	})		
	app.get('/user', function(req, res, next){
		res.writeHead(200);
		res.write(fs.readFileSync(__dirname + '/views/user.html'));
		res.end();
	})
	app.get('/register', function(req, res, next){
		res.writeHead(200);
		res.write(fs.readFileSync(__dirname + '/views/register.html'));
		res.end();
	})

	//API section
	app.get('/api/user',controller.user.users);
	app.post('/api/login',  controller.login.logIn),
	app.post('/api/logout', controller.login.logOut),
	app.post('/api/user/register',controller.user.register);
};

console.log('Rutas : Ok')