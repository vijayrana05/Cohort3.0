const fs = require("fs");

const a = fs.readFile('a.text','utf-8',onDone);

function onDone(err,data){
    console.log(data);
}
