class Employee {
  constructor(data) {
    this.name = data.name;
    this.email = data.email;
    this.occupation = data.occupation;
    this.id = data.id;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }

  getID() {
    return this.id;
  }

  getRole() {
    return this.occupation;
  }
}

module.exports = Employee;
