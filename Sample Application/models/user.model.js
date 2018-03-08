// 'use strict';

// // Test user
// // db.users.insert({id:0,username:"prueba",password:"065411",name:"Tester",lastName:"Master",phone:"",email:"robertor@lagash.com",address:"",createDate:""})
// const
// 	MONGOOSE = require('mongoose'),
// 	Schema 	 = MONGOOSE.Schema,

// 	users  = new Schema({
// 			id : {
// 				type 	: Number,
// 				require : true
// 			},
// 			username : {
// 				type : String,
// 				require : true
// 			},
// 			password : {
// 				type : String,
// 				require : true
// 			},
// 			name : {
// 				type : String,
// 				require : true
// 			},
// 			lastName : {
// 				type : String,
// 				require : false
// 			},
// 			phone : {
// 				type : String,
// 				require : false
// 			},
// 			email : {
// 				type : String,
// 				require : false
// 			},
// 			address : {
// 				type : String,
// 				require : false
// 			},
// 			createDate:{
// 				type : Date,
// 				require : true,
// 				default : Date.now()
// 			}
// 		},
// 		{versionKey: false}
// 	);

// module.exports = MONGOOSE.model('users', users);