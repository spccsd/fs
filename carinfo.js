// 9) Car class with displayInfo()
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    displayInfo() {
      return `Car: ${this.make} ${this.model}, Year: ${this.year}`;
    }
  }
  const make = prompt("9) Enter car make:");
  const model = prompt("Enter car model:");
  const year = prompt("Enter car year:");
  const car = new Car(make, model, year);
  console.log("9)", car.displayInfo());
