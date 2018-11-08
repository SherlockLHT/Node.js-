//本地变量和模块取一样的名字是惯例
var http = require("http");//请求http模块加载
var url = require('url');

function start(route, handle) {
    //createServer是http模块的方法，执行后返回对象，有一个listen的方法，用http服务器监听端口号
    http.createServer(onRequest).listen(8888);
    console.log("Serve has started...");

    function onRequest(request, response) {
        //var postData = "";
        var pathName = url.parse(request.url).pathname;
        console.log("Request for [" + pathName + "] received.");
        route(handle, pathName, response, request);

        //设置接收数据的编码格式为UTF-8
        //request.setEncoding("utf8");

        //注册data事件的监听器，用于收集每次接收到的新数据块
        // request.addListener("data", function (postDataChunk) {
        //     postData += postDataChunk;
        //     console.log("Receive POST data chunk '" + postDataChunk + "'.");
        // });
        // //end事件监听器，保证在数据接收完毕才会触发请求路由
        // request.addListener("end", function () {
        //     route(handle, pathName, response, postData);
        // });
    }
}

exports.start = start;