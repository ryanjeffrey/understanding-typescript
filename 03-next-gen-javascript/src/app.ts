const userName = 'Ryan';

let age = 34;

age = 30;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isOld = true;
//     console.log(isOld);
// }

const add = (a: number, b: number) => {
    return a + b;
};

console.log(add(2, 5));