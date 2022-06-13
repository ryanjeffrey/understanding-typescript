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

function Log4(logTarget: any, name: string | symbol, position: number) {
    console.log('PARAMETER DECORATOR');
    console.log(logTarget, name, position)
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
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax)
    }
}

// 

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFunction = originalMethod.bind(this);
            return boundFunction;
        }
    }
    return adjustedDescriptor;
}

class Printer {
    message = 'This works!'

    @Autobind
    showMessage() {
        console.log(this.message)
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);

// 

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    }
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    }
}

function validate(obj: any) {
    const objectValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objectValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objectValidatorConfig) {
        for (const validator of objectValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleElement = document.getElementById('title') as HTMLInputElement;
    const priceElement = document.getElementById('price') as HTMLInputElement;

    const title = titleElement.value;
    const price = +priceElement.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert('Invalid input, please try again.');
        return;
    }
    console.log(createdCourse);
})