var exec = require("child_process").exec;

function sleep(milliSeconds){
    var startTime = new Date().getTime();
    while(new Date().getTime() < startTime + milliSeconds);
}

function start(){
    console.log("Request handler [start] was called.");
    var content = "empty";

    sleep(5000);

    //非阻塞式
    // exec("find /", function(error, stdout, stderr){
    //     content = stdout;
    // });
    return content;
}

function upload(){
    console.log("Request handlers [upload] was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;