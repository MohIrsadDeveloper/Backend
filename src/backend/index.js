const express = require('express');
const app = express();

app.use(express.json());

// get data from query string(top of page)
app.get("/student/", (req,res) => {
    console.log(req.query);
    console.log(req.query.name);
    res.status(200).json({
        msg : "Ok",
        data : req.query
    });
})

// Get params data from request
app.get('/student/:id', (req,res) => {
    console.log(req.params.id);
    // req.params.parametername
    res.status(200).json({
        msg : "OK",
        id : req.params.id
    })
})

// get data from client request
app.post("/", (req,res) => {
    console.log(req.body);
    res.status(201).json({
        msg : "OK",
        data : req.body
    })
})



const PORT = 5000;
app.listen(PORT, () => {
    console.log("Application is running on port "+ PORT);
})