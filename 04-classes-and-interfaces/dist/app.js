"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    addEmployee(name) {
        if (name === 'Ryan') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Justin']);
it.addEmployee('Ryan');
it.addEmployee('Simone');
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong...');
accounting.addEmployee('Ryan');
accounting.addEmployee('Darnell');
accounting.printReports();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map