const Manager = require(`../lib/Manager`)

describe("Testing getManager()", () =>{
    it("Makes a Manager class from Employee", () =>{    
    expect(() =>{new Manager();}).toThrow("Please start a new Employee")
    })
    it("Check for office number", () =>{
        const managerEmployee = new Manager(1234, "Miguel", "My-email@gmail.com",4321)
        expect(managerEmployee.officeNumber).toEqual(4321)
    })
    it("Returns an 'Manager' when getRole() is invoked", () =>{
        const managerEmployee = new Manager("aa",88) //WHY!!
        expect(managerEmployee.getRole()).toEqual("Manager")
    })
})