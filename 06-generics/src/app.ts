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

//

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'No value.'
    if (element.length === 1) {
        descriptionText = '1 element.'
    } else if (element.length > 1) {
        descriptionText = element.length + ' elements.'
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'))

//

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}

extractAndConvert({ name: 'Walter' }, 'name')

//

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data];
    }
}