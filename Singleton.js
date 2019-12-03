class Counter {
  constructor() {
    if (!!Counter.instance) {
      return Counter.instance;
    }

    Counter.instance = this;
    this.count = 0;
    
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

const count1 = new Counter();
const count2 = new Counter();

count1.increaseCount();
count1.increaseCount();
count2.increaseCount();
count2.increaseCount();

count2.getCount(); // 4