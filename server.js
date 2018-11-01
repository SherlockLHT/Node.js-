//本地变量和模块取一样的名字是惯例
var http = require("http");//请求http模块加载

function startServer() {
    //createServer是http模块的方法，执行后返回对象，有一个listen的方法，用http服务器监听端口号
    http.createServer(onRequest).listen(8080);
    console.log("Serve has started...");

    function onRequest(request, response) {
        console.log("Receive request");
        //200表示HTTP状态，后面参数表示HTTP头内容
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World");  //HTTP主体
        response.end(); //完成响应
        console.log("Send end");
    }
}

//模块接口start，执行内容startServer
exports.start = startServer;