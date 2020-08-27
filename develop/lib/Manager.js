// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super("Manager");
        this.name = name
        this.id = id
        this.email = email
        this.officeNumber = officeNumber;
    }

    logInfo() {
        console.log(`
        Employee name:  ${this.name}
        Employee id:  ${this.id}
        Employee e-mail:  ${this.email}
        Employee Office Number:  ${this.officeNumber}
        Employee Role:  ${this.role}`);

    }
}

const manager = new Manager("Jim", 20, "jhf1203@gmail.com", "12-A")

manager.logInfo();