"use strict";
function merge(objectA, objectB) {
    return Object.assign(objectA, objectB);
}
const mergedObject = merge({ name: 'Gale' }, { number: 40 });
console.log(mergedObject.number);
//# sourceMappingURL=app.js.map