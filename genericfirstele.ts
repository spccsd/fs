// 9) Generic function to return first element
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  console.log("9) First element (number):", getFirstElement([10, 20, 30]));
  console.log("   First element (string):", getFirstElement(["a", "b", "c"]));
  