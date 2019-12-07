class BankAccess {
  open() {
    console.log('The door has been opened');
  }

  close() {
    console.log('The door has been closed');
  }
}

class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.checkPassword(password)) {
      this.door.open();
    } else {
      console.log('Access denied!');
    }
  }

  checkPassword(password) {
    return password === 'Elon Musk';
  }

  close() {
    this.door.close();
  }
}

// usage
const bankEntrance = new SecuritySystem(new BankAccess());

bankEntrance.open('Donald Trump'); // Access denied!
bankEntrance.open('Elon Musk'); // The door has been opened

bankEntrance.close();

