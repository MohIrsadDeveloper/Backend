const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

let secretkey = "abdul"
let token = jwt.sign({id : "5254452"}, secretkey, {expiresIn : 3});
setTimeout(() => {
    
    try {
        let decode = jwt.verify(token, secretkey);
        console.log(decode);
    } catch (err) {
        console.log(err);
    }
}, 1000);


// import something from somelibrary
const { body, validationResult } = require("express-validator")

app.use(express.json());
const password = (req, res, next) => {
    body('password').isLength({ min: 5 });
    next();
}

// app.method('route', 'mwfn1, 'mwfn2',mwfn3, cbfn)
app.post("/user",body('username').isEmail() ,body('password').isLength({ min: 5 }), (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    else {
        res.status(400).json({
            msg: "Ok",
            data: req.body
        })
    }
})


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
})