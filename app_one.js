"use strict";
function Add_1(num1, num2) {
    return num1 + num2;
}
function Add_2(num1, num2) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        return num1 * num2;
    }
}
function Add_3(num1) {
    return num1.val1 + num1.val2 + num1.val3;
}
//const x = docuemnt.getElementById('zzzz') as HTMLInputElement //Here, we are 'type casting' of the return type using 'as' keyword 
console.log(Add_1(1, 2));
let result = Add_3({ val1: 10, val2: 'test', val3: 100.00 });
console.log(result);
//console.log(Add_1('1','2'))
const arr_1 = []; //specyfying 'array' type
const arr_2 = [];
function GiveMeSomeNumber(a) {
    arr_1.push(a);
}
function GiveMeSomeString(a) {
    arr_2.push(a);
}
function GiveMeSomeNumberOrString(a, b) {
    //
}
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It resolves the promise !');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result);
});
console.log('Generic call !!');
