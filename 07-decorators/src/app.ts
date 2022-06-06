function Logger(logString: string) {
    return function(target: Function) {
        console.log(logString)
        console.log(target)  
    }
}

@Logger('LOGGING - PERSON')
class Person {
    name = 'Darnell';

    constructor() {
        console.log('Creating person object...')
    }
}

const pers = new Person()

console.log(pers)