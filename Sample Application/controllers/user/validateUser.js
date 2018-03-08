'use strict';

// Validate "findMatch" INPUT
// Params order and type
// [0]  = search 		 - dataType : js string
// [1]  = fromDate   	 - dataType : js string
// [2]  = toDate		 - dataType : js string
// [3]  = type 			 - dataType : js string
// [4]  = callerNumber 	 - dataType : js string
// [5]  = callerName 	 - dataType : js string
// [6]  = receiverNumber - dataType : js string
// [7]  = receiverName 	 - dataType : js string
// [8]  = tags 			 - dataType : js string
// [9]  = exactMatch 	 - dataType : js bool
// [10] = possibleFraud  - dataType : js bool
// [11] = cc 			 - dataType : js bool

function validaFindMatchParams(headers,query,body,num){
	console.log(headers)
	console.log(query)
	console.log(body)
	console.log(num)

	var a;
	Object.keys(headers).length <= 0 ?
	a = false : headers.traking === undefined ?
	a = false : headers.traking === '' ?
	a = false : typeof headers.traking != 'string' ?
	a = false : Object.keys(query).length > 0 ?
	a = false : body === '' ?
	a = false : body === undefined ?
	a = false : body === null ?
	a = false : typeof body === 'undefined' ?
	a = false : typeof body !== 'object' ?
	// length
	a = false : Object.keys(body).length != num ?
	// principal values
	a = false : Object.keys(body)[0] != 'user' ?
	a = false : Object.keys(body)[1] != 'pass' ?
	// checkType
	a = false : typeof Object.keys(body)[0] != 'number' ?
	a = false : typeof Object.keys(body)[1] != 'string' ?
	a = false : a = true;
	return a;
}

exports.validaFindMatchParams = validaFindMatchParams;