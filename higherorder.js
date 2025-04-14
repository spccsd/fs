// 2) Higher-order function: apply a function to each element of array
function applyFunction(fn, array) {
    return array.map(fn);
  }
  const arrayInput = prompt("2) Enter comma-separated numbers for array:");
  const array = arrayInput.split(",").map(Number);
  const operation = prompt("Enter operation: double / square");
  let func;
  if (operation === "double") {
    func = x => x * 2;
  } else {
    func = x => x * x;
  }
  console.log(`2) Result of applying ${operation}:`, applyFunction(func, array));
