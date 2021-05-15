const generateTemplate = require("./generateTemplate")

const generateReport = (newEmployee) =>{
   return `<!DOCTYPE html>
<html lang="en">

<head>
  <title>Flexbox</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" type="text/css" href="./assets/style.css" />
</head>

<body>
  <header class="main-header">
    <h1>My team</h1>
  </header>
  <main>
    <div class = "parentDiv" >
      <div class="parentCard">
                    <!--Manager cards -->   

      </div>
      <br>
      <div class="card">
                <!--Engineer cards -->

      </div>
      <br>
      <div class="card">
                <!--Intern cards -->

      </div>
    </div>
  </main>
</body>

</html>`
}
module.exports = generateReport
