// 3) Function to return even numbers
function getEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
  }
  console.log("3) Even Numbers:", getEvenNumbers([1, 2, 3, 4, 5, 6]));