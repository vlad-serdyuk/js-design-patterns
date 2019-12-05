class Button {
  constructor(color, width) {
    this.color = color;
    this.width = width;
  }

  clone() {
    return new Button(this.color, this.width);
  }
}

// usage

const buttonPrototype = new Button('blue', 120);

const okButton = buttonPrototype.clone();
const cancelButton = buttonPrototype.clone();
const warninhButton = buttonPrototype.clone();
warninhButton.color('red');