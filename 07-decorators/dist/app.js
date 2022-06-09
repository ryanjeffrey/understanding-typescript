"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    console.log('LOGGER FACTORY');
    return function (target) {
        console.log(logString);
        console.log(target);
    };
}
function WithTemplate(template, hookId) {
    console.log('TEMPLATE FACTORY');
    return function (target) {
        const hookElement = document.getElementById(hookId);
        const p = new target();
        if (hookElement) {
            hookElement.innerHTML = template;
            hookElement.querySelector('h1').textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Darnell';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    Logger('LOGGING'),
    WithTemplate('<h1>My Person Object</h1>', 'app')
], Person);
const pers = new Person();
console.log(pers);
function Log(logTarget, propertyName) {
    console.log('PROPERTY DECORATOR');
    console.log(logTarget, propertyName);
}
function Log2(logTarget, name, descriptor) {
    console.log('ACCESSOR DECORATOR');
    console.log(logTarget, name, descriptor);
}
function Log3(logTarget, name, descriptor) {
    console.log('METHOD DECORATOR');
    console.log(logTarget, name, descriptor);
}
function Log4(logTarget, name, position) {
    console.log('PARAMETER DECORATOR');
    console.log(logTarget, name, position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error('Invalid price - should be a positive number.');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
class Printer {
    constructor() {
        this.message = 'This works!';
    }
    showMessage() {
        console.log(this.message);
    }
}
//# sourceMappingURL=app.js.map