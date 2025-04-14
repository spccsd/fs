//Math.js=
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

//app.js=
const readline = require('readline');
const math = require('./math');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (a) => {
  rl.question('Enter second number: ', (b) => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    console.log(`Addition: ${math.add(num1, num2)}`);
    console.log(`Subtraction: ${math.subtract(num1, num2)}`);
    rl.close();
  });
});
