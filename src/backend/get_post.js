const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

/********* Define Database ********/
let database = mongoose.connect('mongodb://localhost:27017/Amazon_Backend')
    .then(result => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log("Error" + err);
    })


/******** Define Schema ********/
const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});


/********* Define Model ********/
const userModel = mongoose.model("users", UserSchema);



/********* Get Request ********/
app.get("/", async (req, res) => {
    let data = await userModel.find({});
    console.log(data);
    if (data === null) {
        console.log("Data not found");
        res.json({
            msg: "Data not found"
        })
    }
    else {
        console.log("Data fetch Successfully");
        res.status(200).json({
            msg: "OK from Get",
            data: data
        })
    }
})

/********* Post Request ********/
app.post("/", async (req, res) => {
    let r = req.body;
    let f = await userModel.findOne({ email: r.email });
    if (f) {
        console.log("Email already exist")
        res.status(400).json({
            msg: "This Email already exist"
        })
    }
    else {
        console.log("Data Saved Successfully")
        let data = await new userModel(req.body);
        let savedata = await data.save()
        res.status(200).json({
            msg: "OK from Post",
            data: savedata
        })
    }
})


/********* Put Request ********/
app.put("/put/:id", async (req, res) => {
    let id = req.params.id;
    let finaldata = req.body;
    let mdata = await userModel.findOneAndUpdate({ _id: id }, finaldata)
    let final = await userModel.findOne({ _id: id });
    console.log(final);
    if (mdata == null) {
        console.log("Data Not Found");
        res.json({
            msg: "Data Not Found"
        })
    }
    console.log("Data Updated Successfully");
    res.json({
        msg: "Data Updated Successfully",
        data: final
    })
})


/********* Delete Request ********/
app.delete("/delete/:id", async (req, res) => {
    let id = req.params.id;
    let deletedata = await userModel.findOneAndDelete({ _id: id })
    if (deletedata == null) {
        console.log("Data not found")
        res.json({
            msg: "Data not found"
        })
    }
    else {
        console.log("Data deleted successfully");
        res.json({
            msg: "Data Deleted Successfully",
            data: deletedata
        })
    }
})


const PORT = 5000;

app.listen(5000, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
})