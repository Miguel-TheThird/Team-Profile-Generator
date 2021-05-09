const Employee = require(`../lib/Employee`)

describe('Employee constructor testing', () => { //Testing Employee class
    it("Show error if no Employee is constructed", () => { // 1st test
        expect(() =>{new Employee();}).toThrow("Please start a new Employee") //This is the message error you MUST use in your when using throw Error, otherwise it does not work. 
    })
    it("Show error if ID is not a number", () => { // 2st test
        expect(() =>{new Employee("");}).toThrow("Please provide a number") 
    })
    it("Show error if name is a not a string", () => { // 3st test
        expect(() =>{new Employee( "", 1234);}).toThrow("Please provide a valid name") 
    })
    it("Show error if email is not a string", () => { // 3st test
        expect(() =>{new Employee( "", 1234, 5678);}).toThrow("Please provide a valid email") 
    })


})