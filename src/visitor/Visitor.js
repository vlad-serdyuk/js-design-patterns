class Employee {
  constructor(salary) {
    this.bonus = 0;
    this.salary = salary;
  }

  accept(visitor) {
    visitor(this);
  }
}

class Developer extends Employee {
  constructor(salary) {
    super(salary);
  }
}

class Manager extends Employee {
  constructor(salary) {
    super(salary);
  }
}

function bonusVisitor(employee) {
  if (employee instanceof Developer) {
    employee.bonus = employee.salary;
  }

  if (employee instanceof Manager) {
    employee.bonus = employee.salary * 2;
  }
}

// usage
const dev = new Developer(4000);
const manager = new Manager(3500);

dev.accept(bonusVisitor());
dev.bonus // 4000