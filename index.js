const manager = require("./library/manager");
const engineer = require("./library/engineer");
const intern = require("./library/intern");

const { prompt } = require("inquirer");
const util = require("util");

const markUpGenerator = require("./utils/markUpGenerator");
fs = require("fs");

const questions = [
  { type: "input", name: "name", message: "What is your team member's name?" },

  {
    type: "input",
    name: "email",
    message: "What is your team member's email address?",
  },

  {
    type: "checkbox",
    name: "title",
    message: "What is your team member's job title?",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your team member's github?",
  },
  {
    type: "input",
    name: "ID",
    message: "Enter the team member's Staff ID:",
  },

  {
    type: "input",
    name: "office",
    message: "What is your team member's office number?",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

function init() {
  prompt(questions).then((response) => {
    writeToFile("team.html", response);
  });
}

init();
