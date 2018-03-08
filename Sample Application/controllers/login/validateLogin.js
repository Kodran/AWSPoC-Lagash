'use strict';
// Valida si los elementos de la petición son los justos y necesarios - LogIn
// Orden de parametros al crear
// [0] = password - tipo : db varchar(50) / js string \ min - 6 max - 20 caracteres
// [1] = nombre   - tipo : db varchar(25) / js string
function validateLoginParams(query,body,num){
	var a;
	Object.keys(query).length > 0 ?
	a = false : body === '' ?
	a = false : body === undefined ?
	a = false : body === null ?
	a = false : typeof body === 'undefined' ?
	a = false : typeof body !== 'object' ?
	a = false : Object.keys(body).length != num ?
	a = false : Object.keys(body)[0] != 'pass' ?
	a = false : Object.keys(body)[1] != 'user' ?
	a = false : typeof Object.keys(body)[0] != 'string' ?
	a = false : typeof Object.keys(body)[1] != 'string' ?
	a = false : a = true;
	return a;
}
// Valida si los elementos de la petición son los justos y necesarios - LogOut
function validateLogoutParams(headers,query,body,num){
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
	a = false : Object.keys(body).length != num ?
	a = false : Object.keys(body)[1] != 'name' ?
	a = false : a = true;
	return a;
}

exports.validateLoginParams  = validateLoginParams;
exports.validateLogoutParams = validateLogoutParams;