/**
 * Exercise 3: Create an HTTP web server
 */

var http = require('http')
const fs = require('fs')
const { Script } = require('vm')


//create a server

  // YOUR CODE GOES IN HERE
let server = http.createServer(function (req, res) {
	try{
	if(req.url === '/'){
	const html = fs.readFileSync('index.html')
	res.writeHead(200, {'Content-Type': 'text/html'})
	 res.end(html) // Ends the response
	}
	 if (req.url === '/index.js') {
		const js = fs.readFileSync('index.js')
  	res.writeHead(200, {'Content-Type': 'application/javascript'})
	  res.end(js) // Ends the response
	} 
	if (req.url === '/style.css') {
		const css = fs.readFileSync('style.css')
  	res.writeHead(200, {'Content-Type': 'text/css'})
	  res.end(css) // Ends the response
	} 
	} catch (err) {console.log('something went wrong' + err)}

});

server.listen(3000, () => console.log('server is running...')) // The server starts to listen on port 3000
