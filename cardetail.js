// 6) Car class
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    showDetails() {
      console.log(`Car Details: ${this.make} ${this.model}, Year: ${this.year}`);
    }
  }

  const carMake = prompt("Enter car make:");
  const carModel = prompt("Enter car model:");
  const carYear = prompt("Enter car year:");
  const myCar = new Car(carMake, carModel, carYear);
  myCar.showDetails();
