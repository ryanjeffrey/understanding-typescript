function Logger(logString: string) {
    return function(target: Function) {
        console.log(logString)
        console.log(target)  
    }
}

function WithTemplate(template:string, hookId: string) {
    return function(_: Function) {
        const hookElement = document.getElementById(hookId);
        if (hookElement) {
            hookElement.innerHTML = template
        }
    }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Darnell';

    constructor() {
        console.log('Creating person object...')
    }
}

const pers = new Person()

console.log(pers)