function Logger(logString: string) {
    console.log('LOGGER FACTORY')
    return function(target: Function) {
        console.log(logString)
        console.log(target)  
    }
}

function WithTemplate(template:string, hookId: string) {
    console.log('TEMPLATE FACTORY')
    return function(target: any) {
        const hookElement = document.getElementById(hookId);
        const p = new target();
        if (hookElement) {
            hookElement.innerHTML = template;
            hookElement.querySelector('h1')!.textContent = p.name;
        }
    }
}

@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Darnell';

    constructor() {
        console.log('Creating person object...')
    }
}

const pers = new Person()

console.log(pers)

// 

function Log(logTarget: any, propertyName: string | symbol) {
    console.log('PROPERTY DECORATOR');
    console.log(logTarget, propertyName)
}

function Log2(logTarget: any, name: string, descriptor: PropertyDescriptor) {
    console.log('ACCESSOR DECORATOR');
    console.log(logTarget, name, descriptor)
}

function Log3(logTarget: any, name: string | symbol, descriptor: PropertyDescriptor) {
    console.log('METHOD DECORATOR');
    console.log(logTarget, name, descriptor)
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(value: number) {
        if (value > 0) {
            this._price = value;
        } else {
            throw new Error('Invalid price - should be a positive number.')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(tax: number) {
        return this._price * (1 + tax)
    }
}