const express = require("express");
const app = express();
const env = require("dotenv");
env.config();

const mongoose = require("mongoose");
const { Schema } = mongoose;


// Check mongodb connection
mongoose.connect(
    `mongodb://localhost:27017/test`
)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected");
})


// Define Scheme
// const object = new Class();
const UserSchema = new Schema({
    // P:V
    firstName: String,
    'lastName': { type: String },
    "address": { type: String, required: true },
    "username": { type: String, unique: true, required: true },

});

// Define UserModel
const UserModel = mongoose.model("User", UserSchema);

const user = new UserModel({
    firstName: 'Abdul',
    lastName: "Idrisi",
    address: "Malad East",
    username: "AbdulIdrisii"
})

// 1. modelObject.save
user.save(function (err) {
    if (err) {
        return (err);
    }
    else {
        console.log("Data inserted Successfully");
    }
})

// 2. Model.create()
UserModel.create({
    firstName: 'Asma',
    lastName: "Idrisi",
    address: "Malad East",
    username: "AsmaIdrisi"
}, function () {
    console.log('Data inserted successfully by create method')
})

// model.insertMany()
UserModel.insertMany([
    {
        firstName: 'Ayesha',
        lastName: "Idrisi",
        address: "Malad East",
        username: "AyeshaIdrisi1"
    },
    {
        firstName: 'Abdullah',
        lastName: "Idrisi",
        address: "Malad East",
        username: "Abdullahdrisi"
    }
], function () {
    console.log("Data Insert Successfully by insert method.")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Application is running on http://localhost${PORT}`);
})