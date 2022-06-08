function Logger(logString: string) {
    return function(target: Function) {
        console.log(logString)
        console.log(target)  
    }
}

function WithTemplate(template:string, hookId: string) {
    return function(target: any) {
        const hookElement = document.getElementById(hookId);
        const p = new target();
        if (hookElement) {
            hookElement.innerHTML = template;
            hookElement.querySelector('h1')!.textContent = p.name;
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