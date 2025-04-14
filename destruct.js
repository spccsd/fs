// 4) Object destructuring
const pName = prompt("Enter person's name:");
const pAge = prompt("Enter person's age:");
const person = { name: pName, age: pAge };
const { name, age } = person;
console.log(`Destructured values -> Name: ${name}, Age: ${age}`);
