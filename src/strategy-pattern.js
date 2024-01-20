// Step 1: Tạo các thuật toán (strategies)
class OperationAdd {
  execute(num1, num2) {
    return num1 + num2;
  }
}

class OperationSubtract {
  execute(num1, num2) {
    return num1 - num2;
  }
}

class OperationMultiply {
  execute(num1, num2) {
    return num1 * num2;
  }
}

// Step 2: Tạo một Context (đối tượng sử dụng thuật toán)
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  executeStrategy(num1, num2) {
    return this.strategy.execute(num1, num2);
  }
}

// Step 3: Sử dụng
const contextAdd = new Context(new OperationAdd());
console.log("10 + 5 =", contextAdd.executeStrategy(10, 5)); // Output: 15

const contextSubtract = new Context(new OperationSubtract());
console.log("10 - 5 =", contextSubtract.executeStrategy(10, 5)); // Output: 5

const contextMultiply = new Context(new OperationMultiply());
console.log("10 * 5 =", contextMultiply.executeStrategy(10, 5)); // Output: 50
