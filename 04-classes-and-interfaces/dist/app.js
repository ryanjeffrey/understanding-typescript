"use strict";
let user1;
user1 = {
    name: 'Ryan',
    age: 34,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there - I am');
//# sourceMappingURL=app.js.map