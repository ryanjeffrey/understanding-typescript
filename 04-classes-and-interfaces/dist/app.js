"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
//# sourceMappingURL=app.js.map