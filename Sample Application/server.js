'use strict';

const
    express  	= require('express'),
    fs       	= require('fs'),
    cors     	= require('cors'),
    body_parser = require('body-parser'),
    app 	 	= express(),
    // port      = process.env.PORT || 3001,
    port      = 3001,
    local     = '127.0.0.1',
    url_encoder = body_parser.urlencoded({ extended: false });

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

app.use(body_parser.json());
app.use(url_encoder);
app.use(cors());

app.use(function(req, res, next) {    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Expose-Headers", "Traking");    
    next();
});

app.use(express.static(__dirname + '/view'));

try{
    require('./router.js')(app);
} catch (err) {
    console.log('Routes error:')
    console.log(err)
}


//init server
app.listen(port);
console.log('Server running at http://'+local+':'+port+'/')