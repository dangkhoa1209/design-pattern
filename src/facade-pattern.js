// Step 1: Tạo các phần của hệ thống phức tạp
class CPU {
  start() {
    console.log("CPU is starting...");
  }

  shutdown() {
    console.log("CPU is shutting down...");
  }
}

class Memory {
  load() {
    console.log("Memory is loading data...");
  }

  unload() {
    console.log("Memory is unloading data...");
  }
}

class HardDrive {
  read() {
    console.log("Hard Drive is reading data...");
  }

  write() {
    console.log("Hard Drive is writing data...");
  }
}

// Step 2: Tạo Facade để giảm độ phức tạp
class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start() {
    this.cpu.start();
    this.memory.load();
    this.hardDrive.read();
    console.log("Computer is started and ready to use.");
  }

  shutdown() {
    this.cpu.shutdown();
    this.memory.unload();
    this.hardDrive.write();
    console.log("Computer is shut down.");
  }
}

// Step 3: Sử dụng Facade để tương tác với hệ thống
const computerFacade = new ComputerFacade();

// Bật máy tính
computerFacade.start();
/*
Output:
CPU is starting...
Memory is loading data...
Hard Drive is reading data...
Computer is started and ready to use.
*/

// Tắt máy tính
computerFacade.shutdown();
/*
Output:
CPU is shutting down...
Memory is unloading data...
Hard Drive is writing data...
Computer is shut down.
*/
