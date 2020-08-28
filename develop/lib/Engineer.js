// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (role, name, id, email, gitHub) {
        super(role, name, id, email);
        this.gitHub = gitHub;
    }

    getGithub() {
        console.log(`My github is ${this.gitHub}`)
        return this.gitHub
    }

}

const engineer = new Engineer("Engineer", "Jim", 20, "jhf1203@gmail.com", "jhf1203")

engineer.getGithub();

module.exports = Engineer