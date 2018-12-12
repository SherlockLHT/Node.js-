//路由模块，即包含很多方法，用于分发执行函数，返回结果
function route(handle, pathName){
    console.log("About to route a request for " + pathName);
    if(typeof handle[pathName] === "function"){
        return handle[pathName]();
    }else{
        console.log("No request handler found for [" + pathName + "]");
        return "404 Not found";
    }
}

exports.route = route;