// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objectA: T, objectB: U) {
    return Object.assign(objectA, objectB)
}

const mergedObject = merge({name: 'Gale'}, {number: 40})
console.log(mergedObject.number)

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = 'No value.'
    if (element.length === 1) {
        descriptionText = '1 element.'
    } else if (element.length > 1) {
        descriptionText = element.length + ' elements.'
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'))