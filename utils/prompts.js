const inquirer = require("inquirer");

const promptPeople = (teamData) => {
  if (!teamData) {
    teamData = [];
  }

  console.log(`Add a New Team Member`);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your team member's name?",
      },

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
        when: ({ occupation }) => {
          if (occupation === "Engineer") {
            return true;
          } else {
            return false;
          }
        },
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
        when: ({ occupation }) => {
          if (occupation === "Manager") {
            return true;
          } else {
            return false;
          }
        },
      },

      {
        type: "input",
        name: "school",
        message: "What is interns your school?",
        when: ({ occupation }) => {
          if (occupation === "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddPerson",
        message: "Would you like to add another team member?",
        default: false,
      },
    ])
    .then((person) => {
      teamData.push(person);
      if (person.confirmAddPerson) {
        return promptPeople(teamData);
      } else {
        return teamData;
      }
    });
};

module.exports = promptPeople;
