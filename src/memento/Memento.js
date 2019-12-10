class Memento {
  constructor(value) {
    this.value = value;
  }
}

const creator = {
  save: value => new Memento(value),
  restore: memento => memento.value,
};

class CareTaker {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}

// usage
const careTaker = new CareTaker();

careTaker.addMemento(creator.save('hello'));
careTaker.addMemento(creator.save('hello world'));
careTaker.addMemento(creator.save('hello world !!!'));

console.log(creator.restore(careTaker.getMemento(1))); // hellow world