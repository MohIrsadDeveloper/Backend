const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/test')
.then(result => {
    console.log("Database Connected Successfully");
})
.catch(err => {
    console.log(err);
});

// Define Schema
const userSchema = new mongoose.Schema({
    "name" : { type : String, unique: true},
    "password" : String
});

// Define Model
const userModel = mongoose.model('newusers', userSchema);

const user = new userModel({
    name : "Asma",
    password : "asma"
});

// 1. ModelObject.save()
user.save(function (err) {
    if (err) {
        return (err);
    }
    else {
        console.log('Data Saved Successfully');
    }
})

// 2. model.create()
userModel.create({name:"Abdul", password : "abdul"}, function (err) {
    if(err) {
        return (err)
    }
    else {
     console.log("Data created successfully");
    }
})

// 3. model.insert
userModel.insertMany([{name:"Ayesha", password: "ayesha"}], function (err) {
    if(err) return err;
    else {
        console.log("Data inserted Successfully");
    }
})

app.get("/", (req,res) => {
    res.send("Hello World");
});

app.post("/", (req,res) => {
    res.send("Post request Started");
})


const PORT = 4000;

app.listen(PORT, () => {
    console.log("Application is running on port:" + PORT);
})