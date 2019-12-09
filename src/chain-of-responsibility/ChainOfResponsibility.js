class Account {
  pay(orderPrice) {
    if (this.canpay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`);
    } else if (this.incomer) {
      console.log(`Cannot pay using ${this.name}`);
      this.incomer.pay(orderPrice);
    } else {
      console.log('Unfortunately, not enough money');
    }
  }

  canPay(amount) {
    return this.balance >= amount;
  }

  setNext(account) {
    this.incomer = account;
  }
}

class Stripe extends Account {
  constructor(balance) {
    super();
    this.name = 'Stripe';
    this.balance = balance;
  }
}

class Square extends Account {
  constructor(balance) {
    super();
    this.name = 'Square';
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance) {
    super();
    this.name = 'Paypal';
    this.balance = balance;
  }
}

// usage
const stripe = new Stripe(100);
const square = new Square(150);
const paypal = new Paypal(250);

// define chain
stripe.setNext(square);
square.setNext(paypal);

stripe.pay(220);

/*
  output:
  'Cannot pay using Stripe'
  'Cannot pay using Square'
  'Paid 220 using Paypal'
*/ 