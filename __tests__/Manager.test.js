const Manager = require(`../lib/Manager`)

describe("Manager", () => {
    it("Throws an error when a manager is created without parameters", () => {
        expect(() => { new Manager(); }).toThrow("Please provided valid parameters")
    })
    it("Please insert valid Office Number", () => {
        const managerEmployee = new Manager(1234, "Miguel", "My-email@gmail.com", 4321)
        expect(managerEmployee.officeNumber).toEqual(4321)
    })
    it("Returns an 'Manager' when getRole() is invoked", () =>{
        const managerEmployee = new Manager(1234, "Miguel", "My-email@gmail.com", 4321) //Recreates an instance of Employee
        expect(managerEmployee.getRole()).toEqual("Manager")
    })
})