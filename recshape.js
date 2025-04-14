// 10) Shape and Rectangle class with area()
class Shape {
    area() {
      return 0;
    }
  }
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }

    area() {
      return this.width * this.height;
    }
  }
  const width = parseFloat(prompt("10) Enter width of rectangle:"));
  const height = parseFloat(prompt("Enter height of rectangle:"));
  const rect = new Rectangle(width, height);
  console.log("10) Rectangle Area:", rect.area());
