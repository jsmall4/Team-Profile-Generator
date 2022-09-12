const Employee = require("./Employee");

class Manager extends Employee {
  constructor(element) {
    super(element);
    this.office = element.office;
  }

  getOffice() {
    return this.office;
  }
  getRole() {
    return this.occupation;
  }
}

module.exports = Manager;
