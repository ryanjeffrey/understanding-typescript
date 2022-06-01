"use strict";
function merge(objectA, objectB) {
    return Object.assign(objectA, objectB);
}
const mergedObject = merge({ name: 'Gale' }, { number: 40 });
console.log(mergedObject.number);
function countAndDescribe(element) {
    let descriptionText = 'No value.';
    if (element.length === 1) {
        descriptionText = '1 element.';
    }
    else if (element.length > 1) {
        descriptionText = element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
//# sourceMappingURL=app.js.map