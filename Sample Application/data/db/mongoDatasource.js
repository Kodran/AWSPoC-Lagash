// 'use strict';
// const 
// 	MONGOOSE = require("mongoose"),
// 	// Production
// 	// URL_MONGODB = 'mongodb://localhost/voiceAnalytics';
// 	// local
// 	URL_MONGODB = process.argv[2] || 'mongodb://localhost/voiceAnalytics';


// console.log('--Testing mongoDB!--')
// MONGOOSE.connect(URL_MONGODB);

// var db = MONGOOSE.connection;
// db.on('error', console.error.bind(console, 'error connecting with mongodb database:'));

// db.once('open', function() {
//   console.log('connected to mongodb database');
// });    

// db.on('disconnected', function () {
//    //Reconnect on timeout
//    MONGOOSE.connect(URL_MONGODB);
//    db = MONGOOSE.connection;
// });

// module.exports = MONGOOSE;