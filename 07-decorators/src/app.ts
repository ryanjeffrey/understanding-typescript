function Logger(target: Function) {
    console.log('Logging...')
    console.log(target)
}

class Person {
    name = 'Darnell';

    constructor() {
        console.log('Creating person object...')
    }
}

const pers = new Person()

console.log(pers)