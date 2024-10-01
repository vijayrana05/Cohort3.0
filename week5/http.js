const express = require("express");

const app = express();

app.get("/add", function(req, res) {
    let num1 = Number(req.query.a) 
    let num2 = Number(req.query.b)
    res.json({
        ans: num1 + num2
    })
});

app.get("/multiply", function(req, res) {
    let num1 = Number(req.query.a) 
    let num2 = Number(req.query.b)
    res.json({
        ans: num1 * num2
    })
});

app.get("/divide", function(req, res) {
    let num1 = Number(req.query.a) 
    let num2 = Number(req.query.b)
    res.json({
        ans: num1 / num2
    })
});

app.get("/subtract", function(req, res) {
    let num1 = Number(req.query.a) 
    let num2 = Number(req.query.b)
    res.json({
        ans: num1 - num2
    })
});

app.listen(3000);