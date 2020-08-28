// TODO: Write code to define and export the Employee class

class Employee {
    constructor(role, name, id, email) {
        this.role = role;
        this.name = name;
        this.id = id
        this.email = email;
    }
    getName() {
        return this.name
    };
    getId() {
        return this.id
    };
    getEmail() {
        return this.email
    };
    getRole() {
        return this.role
    };
    getEmployee() {
        return Employee
    } ; 
} 

module.exports = Employee;
