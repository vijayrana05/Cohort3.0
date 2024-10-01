const fs = require("fs");

function readthefile(x){ // imagine this x as callback
    fs.readFile('a.text','utf-8',function(err,data){
        x(data);
    })
}

function callback(content){
    console.log(content);
}


const p = new Promise(readthefile);
p.then(callback);


