// TODO: Write code to define and export the Employee class

class Employee {

    constructor(role) {
        this.role = role;
    }

    logInfo() {
        console.log(`Employee role:  ${this.role}`)
    };
} 

// const employee = new Employee("student");
// employee.logInfo();

module.exports = Employee;
