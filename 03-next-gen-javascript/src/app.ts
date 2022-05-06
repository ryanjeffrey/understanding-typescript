const userName = 'Ryan';

let age = 34;

age = 30;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isOld = true;
//     console.log(isOld);
// }

// const add = (a: number, b: number) =>  a + b;

// const printOutput = (output: string | number) => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(2, 5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
    name: 'Ryan',
    age: 77
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};

const addedNumbers = add(5, 10, 42, 12.222);
console.log(addedNumbers);