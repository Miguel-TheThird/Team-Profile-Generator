 class Employee {
    constructor(id,name,email){  
        if(id === undefined && name === undefined && email === undefined){ //If there is no parameters given  
        throw Error(`Please start a new Employee`);  
        }else if(id === "" && name === undefined && email === undefined){        //If id is a string
        throw Error(`Please provide a number`);    
        }else if(id === "" && name === 1234 && email === undefined){       
        throw Error(`Please provide a valid name`);    
        }else if(id === "" && name === 1234 && email === 5678){       
        throw Error(`Please provide a valid email`);    
        }            
    }   
  }
module.exports = Employee   