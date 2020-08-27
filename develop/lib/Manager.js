// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor (role, name, id, email, officeNumber) {
        super("manager", "Jim", 20, "jhf1203@gmail.com");
        this.officeNumber = officeNumber;
    }

    logInfo() {
        console.log(`role:  ${this.role}
        name:  ${this.name}
        id:  ${this.id}
        email:  ${this.email}
        officeNumber:  ${this.officeNumber}`)
    }

}

const manager = new Manager("Manager, Jim", 20, "jhf1203@gmail.com", "12-A")

manager.logInfo();