var fs = require("fs");

fs.readFile("tmp/test.png", function(error, data){
    if(error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });
