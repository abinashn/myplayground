var http = require('http');
var mydt = require('./mydtmodule');
var url = require('url');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('Hello Abinash'+'<br\>');
	res.write("Current Time is : " + mydt.myDataTime())
	res.write('<br\>');
	//http://localhost:8088/?firstName=Sapna&lastName=Ramaiah
	var query = url.parse(req.url,true).query;
	var queryString = query.firstName + " " + query.lastName;
	res.write("Hi " + queryString + "!!!");

	res.end();
}).listen(8088);
