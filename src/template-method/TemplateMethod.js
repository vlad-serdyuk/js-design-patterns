class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    return `${this.name} handles ${this.resposibilities()}`;
  }

  getPaid() {
    return `${this.name} got paid ${this.salary}`;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  resposibilities() {
    return 'app development';
  }
}

class QA extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  resposibilities() {
    return 'testing';
  }
}

// usage
const johnDev = new Developer('John', 3000);
johnDev.work(); // 'John handles app development 
johnDev.getPaid(); // 'John got paid 3000