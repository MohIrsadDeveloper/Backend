const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");

env.config();

app.use(express.json());

// Define Database
const database = mongoose.connect('mongodb://localhost:27017/Amazon_Backend', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(result => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log(err);
    })


// Define Schema
const UserSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobile: { type: String, }

})

// Define Model
const UserModel = mongoose.model("Users", UserSchema);


app.post("/api/register", (req, res) => {
    let { firstName, lastName, email, password, mobile } = req.body;
    // console.log(req.body);
    UserModel.findOne({ email: email }).then((data) => {
        if (data) {
            res.status(400).json({
                msg: "Failed - User Already Exists"
            })
        }
        else {
            UserModel.create({firstName,lastName,email,password,mobile}).then((data) => {
                res.status(200).json({
                    msg: "OK - Registeration is Successfully",
                    d: data
                })
            })
            .catch((error) => {
                res.status(400).json(e);
            })
            .finally();
        }
    })
})



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
});