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

    // Asking questions to get the answers within the Employee constructor only, IE the attributes that are shared among all employee types.
    inquirer.prompt([{
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
    ]).then(function (answers) {

        // Determining the next line of questions to be answered, based off of which role the employee will have
        if (answers.answerRole === "Engineer") {
            engineerQs(answers);
        } else if (answers.answerRole === "Intern") {
            internQs(answers);
        } else {
            managerQs(answers);
        }
    })
}

// Getting the unique information for Engineers
function engineerQs(baseAnswers) {
    inquirer.prompt([{
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
        if (answers.answerAddAnother === true) {

            // This loops back to the original function to add another employee if the user so chooses
            employeeQs()
        } else {

            // This begins the process of rendering the content if there is nobody else to add
            buildTeam();
            console.log("rendered!")
        }
    })
}

// Getting the unique information for Interns
function internQs(baseAnswers) {
    inquirer.prompt([{
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
        if (answers.answerAddAnother === true) {

            // This loops back to the original function to add another employee if the user so chooses
            employeeQs()
        } else {

            // This begins the process of rendering the content if there is nobody else to add
            buildTeam();
            console.log("rendered!")
        }
    })
}

// Getting the unique information for MAnagers
function managerQs(baseAnswers) {
    inquirer.prompt([{
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
        if (answers.answerAddAnother === true) {

            // This loops back to the original function to add another employee if the user so chooses
            employeeQs()
        } else {

            // This begins the process of rendering the content if there is nobody else to add
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