function combine(input1: number | string, input2: number | string, resultConversion: string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 63, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '63', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Ryan', 'Simone', 'as-text');
console.log(combinedNames);
