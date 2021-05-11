 class Employee {
    constructor(id, name, email){  
        if(id === undefined && name === undefined && email === undefined){ //If there is no parameters given  
        throw Error(`"Please provided valid parameters"`);  
        }else if(id === "" && name === undefined && email === undefined){        //If id is a string
        throw Error(`Please provide a number`);    
        }else if(id === "" && name === 1234 && email === undefined){       
        throw Error(`Please provide a valid name`);    
        }else if(id === "" && name === 1234 && email === 5678){       
        throw Error(`Please provide a valid email`);    
        }
        this.id = id;
        this.name = name;
        this.email = email;            
    }
    getId(){
      return this.id
    }
    getName(){
      return this.name
    }
    getEmail(){
      return this.email
    }
    getRole(){
      return "Employee"
    }            
  }


module.exports = Employee   
