const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())

app.post("/add", function(req, res) {
    let num1 = Number(req.body.a) 
    let num2 = Number(req.body.b)
    res.json({
        ans: num1 + num2
    })
   
});

app.listen(3000);
