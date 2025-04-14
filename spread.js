// 5) Spread syntax
const arr1 = prompt("Enter first array of numbers (comma-separated):").split(",").map(Number);
const arr2 = prompt("Enter second array of numbers (comma-separated):").split(",").map(Number);
const mergedArray = [...arr1, ...arr2];
console.log("Combined Array using spread syntax:", mergedArray);

