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
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Walter' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Brian');
textStorage.addItem('Lance');
textStorage.removeItem('Brian');
console.log(textStorage.getItems());
//# sourceMappingURL=app.js.map