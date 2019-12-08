class Color {
  constructor(name) {
    this.name = name;
  }
}

class ColorFactory {
  constructor() {
     this.colors = {};
  }

  create(name) {
    let color = this.colors[name];
    if (color) {
      return color;
    }

    this.colors[name] = new Color(name);
    return this.colors[name];
  }
}

// usage
const colorFactory = new ColorFactory();

const blue = colorFactory.create('blue');
const green = colorFactory.create('green');
const yellow = colorFactory.create('yellow');

const anotherBlue = colorFactory.create('blue'); // return from cache
