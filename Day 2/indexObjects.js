// Beginner
// 1.
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  getDetail = () => {
    console.log(`${this.title} ${this.author}`);
  };
}

const harryPotter = new Book("Harry Potter", "Joanne Rowling");
harryPotter.getDetail();

// 2.
class Product {
  #price = 0;
  constructor(priceProduct) {
    this.#price = priceProduct;
  }
  getPrice = () => {
    return this.#price;
  };
  setPrice = (newPrice) => {
    this.#price = newPrice;
  };
}

const book = new Product(5);
book.getPrice();
book.setPrice(10);
book.getPrice();

// 3.
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.fullName = function () {
    return `${this.name} ${this.surname}`;
  };
}
const sebastian = new Person("Sebastian", "Urdanegui");
sebastian.fullName();

// 4.
class Phone {
  static modelSupported() {
    return ["iPhone 11", "iPhone 13", "iPhone 14"];
  }
}
const modelSupported = Phone.modelSupported();
console.log(modelSupported);

// 5.
class Computer {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  modelYear = () => {
    return `Modelo: ${this.model}, Year: ${this.year}`;
  };
}
const computers = new Computer("Tesla", "2024");
console.log(computers.modelYear());

// Intermediate
// 1.
class User {
  #password = "";
  constructor(userPassword) {
    this.#password = userPassword;
  }
  updatePassword = (newPassword) => {
    return (this.#password = newPassword);
  };
  validatePassword = (userPassword) => {
    if (userPassword === this.#password) {
      return `La contraseñas son correctas`;
    } else {
      return `La contraseñas no son correctas`;
    }
  };
  getPassword = () => {
    return this.#password;
  };
}
const password = new User("Hola 123");
console.log(password.validatePassword("Hola 1234"));
console.log(password.updatePassword("Hola12"));
console.log(password.getPassword());

// 2.
class Vehicle {
  constructor(type) {
    this.type = type;
  }
  get() {
    return this.type;
  }
}

class Truck extends Vehicle {
  constructor(type, price) {
    super(type);
    this.price = price;
  }
  get() {
    const type = super.get();
    console.log("This is a Truck", type);
  }
}

const vehicle = new Vehicle("car");
console.log(vehicle.get());
const truck = new Truck("truck", 5000);
console.log(truck.get());

// 3.
class House {
  constructor(rooms, price) {
    this.rooms = rooms;
    this.price = price;
  }
  getDetail = () => {
    return `Rooms: ${this.rooms}, Price: ${this.price}`;
  };
}
const house = new House(4, 500000);
console.log(house.getDetail());

// 4.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  getInfo() {
    const res = super.getInfo();
    console.log(`${res} Salary: ${this.salary}`);
  }
}

const person = new Person("Sebastian Urdanegui", 23);
console.log(person.getInfo());
const employee = new Employee("Sebastian Urdanegui", 23, 5000);
console.log(employee.getInfo());

// 5.
class Gadget {
  #price;
  product;
  constructor(price, product) {
    this.#price = price;
    this.product = product;
  }
  showInfoFunctionTraditional() {
    return `${this.product} ${this.#price}`;
  }
  showInfoArrowFunction = () => {
    return `${this.product} ${this.#price}`;
  };
}
console.log("Traditional Function");
const gadget = new Gadget(100, "Laptop");
console.log(gadget.showInfoFunctionTraditional());
console.log("Arrow Function");
console.log(gadget.showInfoArrowFunction());
const tradition = gadget.showInfoFunctionTraditional;
console.log(tradition());
const arrow = gadget.showInfoArrowFunction;
console.log(arrow());
