const express = require("express");

const app = express();

let reqCount=0;

function requestCounter(req,res,next) {
    reqCount++;
    console.log(`Total number of requests = ${reqCount}`)
    // res.json({
    //     message: "I ended the request early",
    // });
    // if i remove res.json above and write next() here it will call the next function i.e sumHandler
    next();
}

function sumHandler(req,res) {
    let num1 = Number(req.query.a) 
    let num2 = Number(req.query.b)
    res.json({
        ans: num1 + num2
    })
}
app.get("/add",requestCounter, sumHandler);

app.listen(3000);
