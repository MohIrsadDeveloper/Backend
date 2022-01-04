const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

/*
class Jwt {
    // 1.Property
    // 2.constructor
    // 3.Method
    function sign() {
        return '';
    }
}

let obj = new ClassName();
let jwt = new Jwt();

const token = jwt.sign({})

*/
  

let secretkey = "Oklabs"
let token = jwt.sign({_id : "61d2813b13bfa044e4b36dce"}, "Oklabs", {expiresIn: 1})
console.log(token);

try {
    setTimeout(() => {
        let decode = jwt.verify(token, secretkey)
        console.log(decode);
    }, 10000);
} catch (err) {
    console.log(err);
}


let secretkey1 = "Oksecret";
let token1 = jwt.sign({_id: "jjgkjsgkjgkjsj"}, secretkey1, {expiresIn: 2})
try {
    let decode1 = jwt.verify(token1, secretkey1);
    console.log(decode1);
} catch (err) {
    console.log(err);
}

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
})