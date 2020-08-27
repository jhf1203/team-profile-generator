// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor (name, id, email, school) {
        super("Intern");
        this.name = name
        this.id = id
        this.email = email
        this.school = school;
    }

    logInfo() {
        console.log(`
        Employee name:  ${this.name}
        Employee id:  ${this.id}
        Employee e-mail:  ${this.email}
        Employee School:  ${this.school}
        Employee Role:  ${this.role}`);

    }
}

const intern = new Intern("Jim", 20, "jhf1203@gmail.com", "East Carolina University")

intern.logInfo();