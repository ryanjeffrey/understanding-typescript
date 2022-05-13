class Department {
    name: string;
    employees: string[] = [];

    constructor(n:string) {
        this.name = n;
    }

    describe() {
        console.log('Department: ' + this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting');

accounting.describe();