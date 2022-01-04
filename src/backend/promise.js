// 1. Promise is introduced in ES2018
// 2. Promise is a class
// 3. Time involve


// let Object = new ClassName();

let promiObject = new Promise(function (resolve, reject) { });

// *****promise chain *********
// promiseObj.then().then().then()......catch().finally();


// then() block is used for result
// catch() block is used for error
// finally block is used for both (result/error)

/*
let myPromise = new Promise();


myPromise.then();
myPromise.then();
myPromise.then();
myPromise.catch();
myPromise.finally();
*/


let promiseObj = new Promise(function (resolve,reject) {
    setTimeout(() => {
        reject('error');
    }, 3000)
});

promiseObj.then((result) => {
    console.log(result + " I am inside then block");
}).catch((error) => {
    console.log(error + " I am inside catch block");
}).finally();