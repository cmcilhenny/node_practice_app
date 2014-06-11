// this file creates a module where our HTTP server code lives. It is good place to start your app!

// it's important to use event driven, asynchronous callbacks when creating this. It allows all server requests to go through this function without globally impacting the process.

// require the http module that ships with Node.js. By defining the variable http, we are making the http module accessable!
var http = require("http");
var url = require("url");

// the http module includes the function createServer, so we can call it on the http variable we just defined. (t looks like the below is super similar to XML requests.)

//call createServer on the http variable. Then pass createServer an anonomous function that takes the arguements "request" and "response".
// http.createServer(function(request, response) {
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("Hello World");
// 	response.end();
// }).listen(8888);

// the above refactored

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " recieved.");

		route(pathname);
		
	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.write("Hello World");
	  response.end();
	}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");
}

exports.start = start;