// 4) Add element to array (without mutating original)
function addToArray(arr, element) {
    return [...arr, element];
  }
  const baseArray = prompt("4) Enter original array (comma-separated):").split(",").map(Number);
  const newElement = parseFloat(prompt("Enter element to add to array:"));
  const updatedArray = addToArray(baseArray, newElement);
  console.log("4) New Array:", updatedArray);
  console.log("   Original Array remains unchanged:", baseArray);
