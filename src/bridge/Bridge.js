class Printer {
  constructor(ink) {
    this.ink = ink;
  }
}

class HPPrinter extends Printer {
  constructor(ink) {
    super(ink);
  }

  print() {
    return 'Printer: HP, Ink: ' + this.ink.getInk();
  }
}

class EpsonPrinter extends Printer {
  constructor(ink) {
    super(ink);
  }

  print() {
    return 'Printer: Epson, Ink: ' + this.ink.getInk();
  }
}

// bridge
class Ink {
  constructor(type) {
    this.type = type;
  }

  getInk() {
    return this.type;
  }
}

class BlackAndWhiteInk extends Ink {
  constructor() {
    super('black and white ink');
  }
}

class ColorfulInk extends Ink {
  constructor() {
    super('colorful');
  }
}

// usage
const colorfulPrinter = new HPPrinter(new ColorfulInk());

colorfulPrinter.print(); // Printer: HP, Ink: colorful
