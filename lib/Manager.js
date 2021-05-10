const Employee = require("./Employee");

class Manager extends Employee{
    constructor(id, name, email,officeNumber){
        super(id, name, email)
        this.officeNumber = officeNumber
    }
    getRole(){
        return "Manager"
    }
} 
const manager = new Manager(12345, "Miguel", "My-email@gmail.com")
console.log(manager.getRole()) //Manager
console.log(manager.id)
console.log(manager.name)
console.log(manager.email)
module.exports = Manager