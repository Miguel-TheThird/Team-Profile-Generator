const Engineer = require(`../lib/Engineer`)

 describe("Engineer", () => {    
    it("Throws an error when a engineer is created without parameters", () => {
        
        expect(() => { new Engineer(); }).toThrow("Please provided valid parameters")
    })
    it("Check for GitHub account", () => {
        const engineerEmployee = new Engineer(1234, "Miguel", "My-email@gmail.com", "My-GitHub")
        expect(engineerEmployee.gitHub).toEqual("My-GitHub")
    })
    it("Returns an 'Engineer' when getRole() is invoked", () =>{
        const engineerEmployee = new Engineer(1234, "Miguel", "My-email@gmail.com", "My-GitHub") 
        expect(engineerEmployee.getRole()).toEqual("Engineer")
    })
}) 