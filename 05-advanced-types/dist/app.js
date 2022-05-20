"use strict";
const e1 = {
    name: 'Ryan',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(employee) {
    console.log('Name: ' + employee.name);
    if ('privileges' in employee) {
        console.log('Privileges: ' + employee.privileges);
    }
    if ('startDate' in employee) {
        console.log('Start Date: ' + employee.startDate);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving...');
    }
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
//# sourceMappingURL=app.js.map