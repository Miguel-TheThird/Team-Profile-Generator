const inquirer = require("inquirer");
const generateTemplate = require("./lib/generateTemplate")
const generateReport = require("./lib/generateReport")
const fs = require("fs");
const Employee = require("./lib/Employee");
var empID;
var empName;
var empEmail;

inquirer.prompt([
    {
        name: "id",
        type: "input",
        message: "Please provide ID for new employee:",
    }])
    .then(answers => {
        if (answers.id) {
         empID = answers.id            
        name();
        }
    })

function name(){
inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please provide a Name:",
    }])
    .then(answers => {
        if (answers.name) {
        empName = answers.name
        email();
        }
    })
}

function email(){
inquirer.prompt([
    {
        name: "email",
        type: "input",
        message: "Please provide e-mail:",
    }])
    .then(answers => {
        if (answers.email) {
        empEmail = answers.email
        render();
        }
    })
}
function render(){
var newEmployee = new Employee(empID,empName,empEmail)
console.log(newEmployee)
}
