const Engineer = require("../lib/Engineer");

it("creates the users GitHub account", () => {
  const data = {
    name: "Jack",
    id: 1234,
    email: "jsmallwood@email.com",
    occupation: "Engineer",
    github: "jsmalls",
  };
  const engineer = new Engineer(data);

  expect(engineer.github).toEqual(expect.any(String));
});

it("creates a return of the the engineers occupation", () => {
  const data = {
    name: "Jack",
    id: 1234,
    email: "jsmallwood@email.com",
    occupation: "Engineer",
    github: "jsmalls",
  };
  const engineer = new Engineer(data);

  expect(engineer.getRole()).toEqual(data.occupation);
});
