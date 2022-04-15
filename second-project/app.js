function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    return result;
}
var combinedAges = combine(30, 63);
console.log(combinedAges);
var combinedNames = combine('Ryan', 'Simone');
console.log(combinedNames);
