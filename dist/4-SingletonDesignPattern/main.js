"use strict";
class Department {
    constructor(id, name) {
        this.employee = [];
        this.secret = "Department";
    }
    addEmployee(emp) {
        this.employee.push(emp);
    }
    getEmployee() {
        return this.employee;
    }
    getSecret() {
        return this.secret;
    }
}
Department.staticExample = 'hello World';
class ITDepartment extends Department {
    constructor(id, name) {
        super(id, name);
    }
    getEmployee() {
        return super.getEmployee();
    }
    getSecret() {
        return super.getSecret();
    }
}
let dept = new Department(1, "Department");
dept.addEmployee("abhijeet");
console.log(dept.getEmployee());
let ITdept = new ITDepartment(2, "ITDepartment");
ITdept.addEmployee("abhijeet");
console.log(ITdept.getEmployee());
console.log(ITdept.getSecret());
console.log(Department.staticExample);
//# sourceMappingURL=main.js.map