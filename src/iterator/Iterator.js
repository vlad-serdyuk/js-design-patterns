class ArrayIterator {
  constructor(elements) {
    this.index = 0;
    this.elements = elements;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

class ObjectIterator {
  constructor(elements) {
    this.index = 0;
    this.keys = Object.keys(elements);
    this.elements = elements;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

// array usage
const collection = new ArrayIterator(['Audi', 'BMW', 'Tesla']);

while(collection.hasNext()) {
  console.log(collection.next());
}

// object usage
const cars = {
  audi: { model: 'Audi', color: 'black' },
  bmw: { model: 'BMW', color: 'black' },
  tesla: { model: 'Tesla', color: 'grey' },
};

const collection = new ObjectIterator(cars);

while(collection.hasNext()) {
  console.log(collection.next());
}