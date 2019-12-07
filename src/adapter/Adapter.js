class Soldier {
  constructor(level) {
    this.level = level;
  }

  attack() {
    return this.level * 1;
  }
}

class Jedi {
  constructor(level) {
    this.level = level;
  }

  attackWithSaber() {
    return this.level * 10;
  }
}

class JediAdapter {
  constructor(jedi) {
    this.jedi = jedi;
  }

  attack() {
    return this.jedi.attackWithSaber();
  }
}

// usage
const soldier = new Soldier(5);
soldier.attack();

const jedi = new JediAdapter(new Jedi(10));
jedi.attack();