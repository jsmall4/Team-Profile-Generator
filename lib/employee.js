class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.email = email;
    this.occupation = data.occupation;

    this.id = id;
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
