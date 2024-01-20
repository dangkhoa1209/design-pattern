// Interface for database operations
class DatabaseOperation {
  performOperation() {
    // Abstract method to be implemented by concrete classes
  }
}

// Concrete implementation for MongoDB
class MongoDBOperation extends DatabaseOperation {
  performOperation() {
    console.log("Performing MongoDB operation");
    // Logic specific to MongoDB
  }
}

// Concrete implementation for MySQL
class MySQLOperation extends DatabaseOperation {
  performOperation() {
    console.log("Performing MySQL operation");
    // Logic specific to MySQL
  }
}

// Factory Method to create database operation instances
class DatabaseOperationFactory {
  createDatabaseOperation(databaseType) {
    switch (databaseType) {
      case "MongoDB":
        return new MongoDBOperation();
      case "MySQL":
        return new MySQLOperation();
      default:
        throw new Error("Unsupported database type");
    }
  }
}

// Example usage
const factory = new DatabaseOperationFactory();

const mongoDBOperation = factory.createDatabaseOperation("MongoDB");
mongoDBOperation.performOperation();

const mySQLOperation = factory.createDatabaseOperation("MySQL");
mySQLOperation.performOperation();
