const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const { prompt } = require("inquirer");

const markUpGenerator = require("./utils/markUpGenerator");
const prompts = require("./utils/prompts");
fs = require("fs");

prompts().then((teamData) => {
  let people = [];
  teamData.forEach((element) => {
    switch (element.occupation) {
      case "Manager":
        const manager = new Manager(element);
        people.push(manager);
        return;
      case "Engineer":
        const engineer = new Engineer(element);
        people.push(engineer);
        return;
      case "Intern":
        const intern = new Intern(element);
        people.push(intern);
        return;
    }
    console.log(people);
  });
  fs.writeFile(`./dist/index.html`, markUpGenerator(people), (err) => {
    if (err) {
      reject(err);
      return;
    }
  });
});
