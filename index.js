const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const { prompt } = require("inquirer");

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
    name: "id",
    message: "Enter the team member's Staff ID:",
  },

  {
    type: "input",
    name: "office",
    message: "What is your team member's office number?",
  },

  {
    type: "input",
    name: "school",
    message: "What is your school?",
  },
];

const menuQuestion = {
  type: "list",
  message: "What would you like to do next?",
  name: "menu",
  choices: ["add in intern", "add in engineer", "finish"]
};

// createEmployee();
// createEngineer();
// createIntern();
// createManager();

function writeToFile(fileName, data) {
  fs.writeFile(`./dist/index.html`, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

function promptEmployee() {
  prompt(questions).then((response) => {
    console.log(response);
    promptMenu() 

  
    // writeToFile("index.html", response);
  });

}

function promptMenu() {
  prompt(menuQuestion).then(answer => {
    console.log(answer)
    if (answer.menu != "finish") {
      promptEmployee()

    }
    else writeToFile()
  })
}

promptEmployee();

// const employee1 = new Employee("Jack", "1234", "jsmallwood@email.com");
// const employee2 = new Employee("Bob", "1235", "bsmallwood@email.com");
// const employee3 = new Manager("Sean", "1236", "snew@email.com", "5");

// console.log(employee1.name);
// console.log(employee1.getName());
// console.log(employee2.getRole());
// console.log(employee3.getRole());
