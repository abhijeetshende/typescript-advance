class Department {
  private employee: string[] = [];
  private secret: string = "Department";
  constructor(id: number, name: string) {}
  addEmployee(emp: string) {
    this.employee.push(emp);
  }
  getEmployee() {
    return this.employee;
  }
 
  getSecret() {
    return this.secret;
  }
}

class ITDepartment extends Department {
  constructor(id: number, name: string) {
    super(id, name);
  }

  getEmployee() {
    return super.getEmployee();
  }
  getSecret(): string {
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
