// 3) Curried function to multiply 3 numbers
function multiply(a) {
    return function(b) {
      return function(c) {
        return a * b * c;
      };
    };
  }
  const m1 = parseFloat(prompt("3) Enter first number for multiplication:"));
  const m2 = parseFloat(prompt("Enter second number:"));
  const m3 = parseFloat(prompt("Enter third number:"));
  console.log("3) Curried Multiply Result:", multiply(m1)(m2)(m3));

