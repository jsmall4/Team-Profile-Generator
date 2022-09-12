const Manager = require("../lib/Manager");

it("creates the users Office Number", () => {
  const data = {
    name: "Jack",
    id: 1234,
    email: "jsmallwood@email.com",
    occupation: "Manager",
    office: 4,
  };
  const manager = new Manager(data);

  expect(manager.office).toEqual(data.Number);
});

it("creates a return of the the managers occupation", () => {
  const data = {
    name: "Jack",
    id: 1234,
    email: "jsmallwood@email.com",
    occupation: "Manager",
    office: 4,
  };
  const manager = new Manager(data);

  expect(manager.getRole()).toEqual(data.occupation);
});
