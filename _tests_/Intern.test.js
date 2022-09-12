const Intern = require("../lib/Intern");

it("creates the users GitHub account", () => {
  const data = {
    name: "Jack",
    id: 1234,
    email: "jsmallwood@email.com",
    occupation: "Intern",
    school: "Birmingham University",
  };
  const intern = new Intern(data);

  expect(intern.school).toEqual(expect.any(String));
});

it("creates a return of the the interns occupation", () => {
  const data = {
    name: "Jack",
    id: 1234,
    email: "jsmallwood@email.com",
    occupation: "Intern",
    school: "Birmingham University",
  };
  const intern = new Intern(data);

  expect(intern.getRole()).toEqual(data.occupation);
});
