"use strict";
var _a;
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
const result = add('Ryan', ' Smith');
result.split(' ');
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
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo... ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.kind) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ kind: 'bird', flyingSpeed: 10 });
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there!';
}
const errorMessage = {
    email: 'Not a valid email.',
    username: 'User name must start with a capital letter.'
};
const fetchedUserData = {
    id: 'u1',
    name: 'Ryan',
    job: { title: 'Partner', description: 'Conjure' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=app.js.map