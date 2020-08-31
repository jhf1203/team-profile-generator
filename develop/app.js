const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const teamArr = []

function employeeQs() {

    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the name of the team member you would like to add",
            name: "answerName"
        },
        {
            type: "input",
            message: "Thanks!  Please enter their ID number",
            name: "answerID"
        },
        {
            type: "input",
            message: "Great.  What is their e-mail address?",
            name: "answerEmail"
        },
        {
            type: "list",
            message: "Looks good.  Now please select their role here",
            name: "answerRole",
            choices: ["Engineer", "Intern", "Manager"]
        },
    ]).then(function(answers) {
        if (answers.answerRole === "Engineer") {
            engineerQs(answers);
        } else if (answers.answerRole === "Intern") {
            internQs(answers);
        } else {
            managerQs(answers);
        }
    })
}

function engineerQs(baseAnswers) {
    inquirer.prompt ([
        {
            type: "input",
            message: "An Engineer, got it.  What is their GitHub username?",
            name: "answerGithub",
        },
        {
            type: "confirm",
            message: "Okay, looks like we're all set for this one.  Would you like to add another?",
            name: "answerAddAnother",
        },
    ]).then(function (answers) {
        const newEngineer = new Engineer(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, answers.answerGithub);
        teamArr.push(newEngineer);
        console.log(teamArr);
        // console.log(newEngineer);
        if (answers.answerAddAnother === true) {
            employeeQs()
        } else {
            buildTeam();            
            console.log("rendered!")
        }  
    })
}

function internQs(baseAnswers) {
    inquirer.prompt ([
        {
            type: "input",
            message: "Great!  An intern.  Where did they go to school?",
            name: "answerSchool",
        },
        {
            type: "confirm",
            message: "Okay, looks like we're all set for this one.  Would you like to add another?",
            name: "answerAddAnother",
        },
    ]).then(function (answers) {
        const newIntern = new Intern(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, answers.answerSchool);
        teamArr.push(newIntern);
            // console.log(newIntern);
            console.log(teamArr);
        if (answers.answerAddAnother === true) {
            employeeQs()
        } else {
            buildTeam();
            console.log("rendered!")
        }
    })
}

function managerQs(baseAnswers) {
    inquirer.prompt ([
        {
            type: "input",
            message: "Alright, a manager.  Please enter their office number",
            name: "answerOfficeNumber",
        },
        {
            type: "confirm",
            message: "Okay, looks like we're all set for this one.  Would you like to add another?",
            name: "answerAddAnother",
        },
    ]).then(function (answers) {
        const newManager = new Manager(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, answers.answerOfficeNumber);
            teamArr.push(newManager);
            console.log(teamArr);
        if (answers.answerAddAnother === true) {
            employeeQs()
        } else {
            buildTeam();
            console.log("rendered!")
        }
    })
}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamArr), "utf-8");
  }


employeeQs();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
