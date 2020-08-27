// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super("engineer");
        this.name = name
        this.id = id
        this.email = email
        this.gitHub = gitHub;
    }

    logInfo() {
        console.log(`
        Employee name:  ${this.name}
        Employee id:  ${this.id}
        Employee e-mail:  ${this.email}
        Employee GitHub:  ${this.gitHub}
        Employee Role:  ${this.role}`);

    }
}

const engineer = new Engineer("Jim", 20, "jhf1203@gmail.com", "jhf1203")

engineer.logInfo();