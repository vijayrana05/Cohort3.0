const fs = require("fs");

function readThisFile(finalValue){
    fs.readFile('a.text','utf-8',function(err,data){
        finalValue(data);
    })
}

const p = new Promise(readThisFile);

function callBack(contents){
    console.log(contents);
}
p.then(callBack);