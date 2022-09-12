const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }
  getRole() {
    return this.occupation;
  }
}

module.exports = Manager;
