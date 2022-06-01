// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T, U>(objectA: T, objectB: U) {
    return Object.assign(objectA, objectB)
}

const mergedObject = merge({name: 'Gale'}, {number: 40})
console.log(mergedObject.number)