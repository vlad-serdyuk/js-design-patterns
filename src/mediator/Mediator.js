class CarDealer {
  constructor() {
    this.customers = [];
  }

  orderCar(customer, auto) {
    const customerName = customer.getName();
    console.log(`Order name: ${customerName}. Order auto is ${auto}`);
    this.addToCustomersList(customerName);
  }

  addToCustomersList(name) {
    this.customers.push(name);
  }

  getCustomerslist() {
    return this.customers;
  }
}

class Customer {
  constructor(name, dealer) {
    this.name = name;
    this.dealer = dealer;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto) {
    this.dealer.orderCar(this, auto);
  }
}

// usage
const dealer = new CarDealer(); // dealer is a mediator

const john = new Customer('John', dealer);
const mark = new Customer('Mark', dealer);

john.makeOrder('Tesla');
mark.makeOrder('Audi');



