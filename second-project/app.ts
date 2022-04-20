function add(n1: number, n2: number) {
    return n1 + n2;
}

// This function doesn't have a return statement
function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(5, 12));

let combineValues: Function;

combineValues = add;

console.log(combineValues(8, 8));