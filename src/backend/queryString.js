const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


// Define Mongodb Connection
mongoose.connect("mongodb://localhost:27017/AmazonBackend")
.then(result => {
    console.log("Database Connected Successfully");
})
.catch(err => {
    console.log(err);
});

// Define User Schema
const UserSchema = new mongoose.Schema({
    name : {type: String, required: true},
    password : {type: String, required: true},
    username : {type: String, unique: true, required:true},
    studentid : {type: Number, required: true}
});

// Define User Model
const userModel = new mongoose.model("Users", UserSchema);

app.post("/student", (req,res) => {
    let data = req.body;
    console.log(data);
    res.status(201).send(data);
})


app.get("/student/:studentid", (req,res) => {
    // req.params.parametername
    console.log(req.params.studentid);
    res.status(200).json({
        msg : "OK",
        studentid : req.params.studentid
    })
});


const PORT = 5000;

app.listen(PORT, () => {
    console.log("Application is running on port " + PORT);
})