const express = require("express");
const app = express();
const mongoose = require("mongoose");

const database = mongoose.connect("mongodb://localhost:27017/Amazon-Backend", {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(result => {
    console.log("Database connect");
})
.catch(error => {
    console.log(error);
})


// Define Schema
const kettySchema = new mongoose.Schema({
    name : {
        type : String
    }
});

kettySchema.method('myfunction', () => {
    console.log("meeoueee");
})

kettySchema.method('myFunction2', function () {
    

    return "Hello";
})


// Define Model
const Kitty = mongoose.model("Kitty", kettySchema);

let kitty = new Kitty();

kitty.myfunction();

let x = kitty.myFunction2();
console.log(x);






const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
})