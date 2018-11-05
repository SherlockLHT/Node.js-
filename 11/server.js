//本地变量和模块取一样的名字是惯例
var http = require("http");//请求http模块加载
var url = require('url');

function start(route, handle) {
    //createServer是http模块的方法，执行后返回对象，有一个listen的方法，用http服务器监听端口号
    http.createServer(onRequest).listen(8888);
    console.log("Serve has started...");

    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log("Request for [" + pathName + "] received.");

        //200表示HTTP状态，后面参数表示HTTP头内容
        response.writeHead(200, { "Content-Type": "text/plain" });
        var content = route(handle, pathName);
        response.write(content);  //HTTP主体
        response.end(); //完成响应
        console.log("Send end");
    }
}

exports.start = start;