// Intersection types
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Ryan',
    privileges: ['create-server'],
    startDate: new Date()
}

// Intersection of union types
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Function Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('Ryan', ' Smith');
result.split(' ');

// Type guards
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
    console.log('Name: ' + employee.name);
    if ('privileges' in employee) {
        console.log('Privileges: ' + employee.privileges)
    }
    if ('startDate' in employee) {
        console.log('Start Date: ' + employee.startDate)
    }
}

printEmployeeInformation(e1)

// More type guards
class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo... ' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated unions
interface Bird {
    kind: 'bird';
    flyingSpeed: number;
}

interface Horse {
    kind: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

moveAnimal({kind: 'bird', flyingSpeed: 10});

// Type casting
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}

// Index properties
interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a capital letter' }
    [prop: string]: string;
}

const errorMessage: ErrorContainer = {
    email: 'Not a valid email.',
    username: 'User name must start with a capital letter.'
}

// Optional chaining
const fetchedUserData = {
    id: 'u1',
    name: 'Ryan',
    job: { title: 'Partner', description: 'Conjure' }
}

console.log(fetchedUserData?.job?.title)