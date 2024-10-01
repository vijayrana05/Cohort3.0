const fs = require('fs');
const text1 = fs.readFileSync('a.text','utf8');
console.log(text1);   
const text2 = fs.readFileSync('b.text','utf8');
console.log(text2 + " " +  text1);