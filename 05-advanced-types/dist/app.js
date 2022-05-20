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
//# sourceMappingURL=app.js.map