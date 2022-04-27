"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// This function doesn't have a return statement
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
