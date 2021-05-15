const index = require("../index")
const Employee = require("./Employee")



function generateTemplate(answers){
  
`<section class="card">
        <header>
          <h1>Manager</h1>
          <h2>"${answers.name}"</h2>
        </header>
        <p>ID:"${answers.id}</p>
        <p>e-mail: "${answers.email}"</p>
        
      </section>`
}

module.exports = generateTemplate 

//<p>Office Number: 5678</p>