// 1) Array with const and let
const constArrayInput = prompt("Enter 3 numbers for const array (comma-separated):");
const constArray = constArrayInput.split(",").map(Number);

const letArrayInput = prompt("Enter 3 numbers for let array (comma-separated):");
let letArray = letArrayInput.split(",").map(Number);

console.log("Const Array (initial):", constArray);
console.log("Let Array (initial):", letArray);

// Modify let array
const newLetValue = parseInt(prompt("Enter a number to replace first element in let array:"));
letArray[0] = newLetValue;

const pushLetValue = parseInt(prompt("Enter a number to add to let array:"));
letArray.push(pushLetValue);

console.log("Let Array (modified):", letArray);

// Modify const array (only element, not entire array)
const newConstValue = parseInt(prompt("Enter a number to replace first element in const array:"));
constArray[0] = newConstValue;

console.log("Const Array (modified element):", constArray);
console.log("Note: You can't reassign constArray, but you can modify its elements.");

