// 8) Fibonacci generator (first 3)
function* fibonacci() {
    let a = 0, b = 1;
    yield a;
    yield b;
    yield a + b;
  }
  const fib = fibonacci();
  console.log("8) Fibonacci:");
  console.log(fib.next().value);
  console.log(fib.next().value);
  console.log(fib.next().value);

