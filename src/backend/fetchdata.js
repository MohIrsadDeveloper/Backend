const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({extended :true}));

// Connect Database
mongoose.connect('mongodb://localhost:27017/test')
.then(result => {
    console.log("Database Connected");
})
.catch(err => {
    console.log(err);
})

// Define Schema
const userSchema = mongoose.Schema({
    name : {type : String, required: true},
    password : {type : String, required: true},
    username : {type : String, required: true, unique : true},
})

// Define Model
const PostModel = mongoose.model("posts", userSchema);

const postObject = new PostModel({
    name : "Abdul",
    password : "abdul",
    username : "Abdul",
})
postObject.save(function () {
    console.log("Data Saved Successfully")
});

async function getMyPost(){
    const mypost = await PostModel.find({id : 1})
    console.log(mypost)
}
getMyPost();

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Application is running on port " + PORT);
})