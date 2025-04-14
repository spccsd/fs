// 7) Symbol as unique ID
const uniqueId = Symbol("id");
const uidValue = prompt("Enter a unique ID value:");
const user = {
  name: prompt("Enter a user name:"),
  [uniqueId]: uidValue
};

console.log("User Object with Symbol:", user);
console.log("Access Symbol ID:", user[uniqueId]);
