var http = require('http');
var dt = require('./myfirstmodule');
http.createServer(function (req, res){
   res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Hello world! the time is ' + dt.myDateTime()+"  "+ req.url);
    
    res.end();
}).listen(8080);