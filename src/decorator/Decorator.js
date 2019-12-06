class Car {
  constructor() {
    this.price = 0;
    this.model = 'Base';
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

class Tesla extends Car {
  constructor() {
    super();
    this.price = 5000;
    this.model = 'Tesla';
  }
}

class Autopilot {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 2000;
  }
}

class KeylessEntry {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 500;
  }
}

// usage
let tesla = new Tesla();
tesla = new Autopilot(tesla);
tesla = new KeylessEntry(tesla);