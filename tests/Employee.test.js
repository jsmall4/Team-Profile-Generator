const Employee = require("../lib/Employee");

test("can validate employee name", () => {
  const employee1 = new Employee("Jack", "1234", "jsmallwood@email.com");
  expect(employee1.name).toBe("Jack");
});
