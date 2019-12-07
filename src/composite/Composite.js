class Equipment {
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getPrice() {
    return this.price || 0;
  }

  setPrice(price) {
    this.price = price;
  }
}

class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments
      .map(equipment => equipment.getPrice())
      .reduce((a, b) => a + b, 0);
  }
}

class Workspace extends Composite {
  constructor() {
    super();
    this.setName('workspace');
  }
}

// leafs 
class Laptop extends Equipment {
  constructor() {
    super();
    this.setName('laptop');
    this.setPrice(2000);
  }
}

class Charger extends Equipment {
  constructor() {
    super();
    this.setName('charger');
    this.setPrice(150);
  }
}

class Headphones extends Equipment {
  constructor() {
    super();
    this.setName('headphones');
    this.setPrice(250);
  }
}

class Coffee extends Equipment {
  constructor() {
    super();
    this.setName('Coffee');
    this.setPrice(5);
  }
}

// usage
const workspace = new Workspace();

workspace.add(new Laptop());
workspace.add(new Charger());
workspace.add(new Headphones());

workspace.getName(); // workspace
workspace.getPrice(); // 2400
