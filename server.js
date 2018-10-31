var http = require("http");//请求http模块加载

//createServer是http模块的方法，执行后返回对象，有一个listen的方法，用http服务器监听端口号
http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8080);