//请求处理程序，包含众多针对不同请求的方法，有路由进行分配

var exec = require("child_process").exec;

function start(){
    console.log("Request handler [start] was called.");
    var content = "empty";

    function sleep(milliSecond){
        var start = new Date().getTime();
        while (new Date().getTime() <= start + milliSecond);
    }
    //阻塞式
    sleep(10000);
    //非阻塞式
    //exec("find /");
    return content;
}

function upload(){
    console.log("Request handlers [upload] was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;