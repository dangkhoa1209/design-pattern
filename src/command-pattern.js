// Step 1: Tạo các đối tượng thực hiện công việc cụ thể
class Light {
  turnOn() {
    console.log("Light is ON");
  }

  turnOff() {
    console.log("Light is OFF");
  }
}

// Step 2: Tạo các command objects (đối tượng lệnh)
class Command {
  execute() {
    throw new Error("This method must be overridden");
  }
}

class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class LightOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Step 3: Tạo đối tượng thực hiện yêu cầu (Invoker)
class RemoteControl {
  constructor() {
    this.command = null;
  }

  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Step 4: Sử dụng
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(lightOnCommand);
remote.pressButton(); // Output: Light is ON

remote.setCommand(lightOffCommand);
remote.pressButton(); // Output: Light is OFF
