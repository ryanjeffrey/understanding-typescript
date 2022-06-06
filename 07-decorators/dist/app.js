"use strict";
function Logger(target) {
    console.log('Logging...');
    console.log(target);
}
class Person {
    constructor() {
        this.name = 'Darnell';
        console.log('Creating person object...');
    }
}
const pers = new Person();
console.log(pers);
//# sourceMappingURL=app.js.map