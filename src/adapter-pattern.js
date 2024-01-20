// Step 1: Tạo một interface (giao diện) mong muốn
class Target {
  request() {
    console.log("Target: Standard request");
  }
}

// Step 2: Tạo một lớp thực hiện giao diện mong muốn
class ConcreteTarget extends Target {
  request() {
    console.log("ConcreteTarget: Standard request");
  }
}

// Step 3: Tạo một lớp có giao diện khác mà client muốn sử dụng
class Adaptee {
  specificRequest() {
    console.log("Adaptee: Specific request");
  }
}

// Step 4: Tạo Adapter để chuyển đổi giao diện
class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request() {
    this.adaptee.specificRequest();
  }
}

// Step 5: Sử dụng Adapter
const target = new ConcreteTarget();
target.request(); // Output: ConcreteTarget: Standard request

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
adapter.request(); // Output: Adaptee: Specific request
