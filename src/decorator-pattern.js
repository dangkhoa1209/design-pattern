class Coffee {
  cost() {
    return 5;
  }
}

class SimpleCoffee extends Coffee {}

class CoffeeDecorator extends SimpleCoffee {
  constructor(coffee) {
    super();
    this._coffee = coffee;
  }

  cost() {
    return this._coffee.cost();
  }
}

class MilkDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  cost() {
    return this._coffee.cost() + 2;
  }
}

class SugarDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  cost() {
    return this._coffee.cost() + 1;
  }
}

// Sử dụng
const simpleCoffee = new SimpleCoffee();
console.log("Giá cà phê đơn giản:", simpleCoffee.cost());

const milkCoffee = new MilkDecorator(simpleCoffee);
console.log("Giá cà phê với sữa:", milkCoffee.cost());

const sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log("Giá cà phê với sữa và đường:", sugarMilkCoffee.cost());
