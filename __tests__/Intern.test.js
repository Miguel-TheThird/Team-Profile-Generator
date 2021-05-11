const Intern = require(`../lib/Intern`)

describe("Intern", () => {
    it("Throws an error when a Intern is created without parameters", () => {
        expect(() => { new Intern(); }).toThrow("Please provided valid parameters")
    })
     it("Check for School account", () => {
        const internEmployee = new Intern(1234, "Miguel", "My-email@gmail.com", "UWA")
        expect(internEmployee.school).toEqual("UWA")
    })
    it("Returns an 'Intern' when getRole() is invoked", () => {
        const internEmployee = new Intern(1234, "Miguel", "My-email@gmail.com", "UWA")
        expect(internEmployee.getRole()).toEqual("Intern")
    }) 
})