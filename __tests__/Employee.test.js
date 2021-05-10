const Employee = require(`../lib/Employee`)

describe('Employee constructor testing with WRONG parameters', () => { //Testing Employee class
    it("Show error if no Employee is constructed", () => { // Testing if no parameter is given
        expect(() =>{new Employee();}).toThrow("Please start a new Employee") //This is the message error you MUST use in your when using throw Error, otherwise it does not work. 
    })
    it("Show error if ID is not a number", () => { //If ID is a string
        expect(() =>{new Employee("");}).toThrow("Please provide a number") 
    })
    it("Show error if name is a not a string", () => { //If Name is a number
        expect(() =>{new Employee( "", 1234);}).toThrow("Please provide a valid name") 
    })
    it("Show error if email is not a string", () => { //If email is a number
        expect(() =>{new Employee( "", 1234, 5678);}).toThrow("Please provide a valid email") 
    })
})

describe("Employee constractor testing with CORRECT parameters", () => {
    it("Creates a new Employee when correct parameters are passed", () => {
        expect(new Employee(1234, "Miguel", "My-email@gmail.com")).toEqual(
        {
            id:1234,
            name:"Miguel",
            email:"My-email@gmail.com"
        })});
    it("Returns an ID when getId() is invoked", () =>{
        const testEmployee = new Employee(1234, "Miguel", "My-email@gmail.com") //Recreates an instance of Employee
        expect(testEmployee.getId()).toEqual(1234)
    })
    it("Returns an ID when getName() is invoked", () =>{
        const testEmployee = new Employee(1234, "Miguel", "My-email@gmail.com") //Recreates an instance of Employee
        expect(testEmployee.getName()).toEqual("Miguel")
    })
    it("Returns an ID when getEmail() is invoked", () =>{
        const testEmployee = new Employee(1234, "Miguel", "My-email@gmail.com") //Recreates an instance of Employee
        expect(testEmployee.getEmail()).toEqual("My-email@gmail.com")
    })
    it("Returns an 'Employee' when getRole() is invoked", () =>{
        const testEmployee = new Employee(1234, "Miguel", "My-email@gmail.com") //Recreates an instance of Employee
        expect(testEmployee.getRole()).toEqual("Employee")
    })
    
});
