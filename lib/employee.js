class Employee {
  constructor(name, email, title, github, ID, office) {
    this.name = name;
    this.email = email;
    this.title = title;
    this.github = github;
    this.ID = ID;
    this.office = office;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getTitle() {
    return this.title;
  }
  getGithub() {
    return this.github;
  }
  getID() {
    return this.ID;
  }
  getOffice() {
    return this.office;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
