class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  // Các phương thức và thuộc tính của lớp Singleton
  // có thể được thêm vào đây.
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);

// function DatabaseConnection() {
//   // Kiểm tra xem instance đã được tạo chưa
//   if (DatabaseConnection.instance) {
//     return DatabaseConnection.instance;
//   }

//   // Nếu chưa, tiến hành khởi tạo
//   this.connect = function () {
//     console.log("Connected to the database");
//   };

//   // Lưu trữ instance để sử dụng sau này
//   DatabaseConnection.instance = this;

//   // Trả về instance
//   return this;
// }

// // Sử dụng
// const dbConnection1 = new DatabaseConnection();
// dbConnection1.connect(); // Connected to the database

// const dbConnection2 = new DatabaseConnection();
// dbConnection2.connect(); // Connected to the database

// console.log(dbConnection1 === dbConnection2); //
