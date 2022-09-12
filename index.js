const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const { prompt } = require("inquirer");

const markUpGenerator = require("./utils/markUpGenerator");
const prompts = require("./utils/prompts");
fs = require("fs");

prompts().then((teamData) => {
  console.log("teamData", teamData);
  let people = [];
  teamData.forEach((element) => {
    switch (element.occupation) {
      case "Manager":
        console.log("managerElement", element);
        const manager = new Manager(element);
        people.push(manager);
        break;
      case "Engineer":
        const engineer = new Engineer(element);
        people.push(engineer);
        break;
      case "Intern":
        const intern = new Intern(element);
        people.push(intern);
        break;
    }
    console.log("people", people);
  });
  fs.writeFile(`./dist/index.html`, markUpGenerator(people), (err) => {
    if (err) {
      reject(err);
      return;
    }
  });
});
