// TODO: Write code to define and export the Employee class

class Employee {

    constructor(role, name, id, email) {
        this.role = role;
        this.name = name;
        this.id = id
        this.email = email;
    }

    logInfo() {
        console.log(`Employee role:  ${this.role}`)
    };
} 

// const employee = new Employee("student");
// employee.logInfo();

module.exports = Employee;
