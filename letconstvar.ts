// 2) let, const, var: Scoping and Mutability
let a = 10;       // Block scoped, mutable
const b = 20;     // Block scoped, immutable
var c = 30;       // Function scoped, mutable

{
  let a = 100;
  var c = 300;
  console.log("2) Inside block - let a:", a); // 100
}
console.log("   Outside block - let a:", a);  // 10
console.log("   Outside block - var c:", c);  // 300
console.log("   const b:", b);                // 20
