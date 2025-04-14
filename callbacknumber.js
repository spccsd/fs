// 7) Function that takes number and callback
function applyCallback(num, cb) {
    return cb(num);
  }
  const n = parseFloat(prompt("7) Enter number for callback:"));
  const cbType = prompt("Choose callback: square / cube");
  let callbackFunc = cbType === "cube" ? x => x * x * x : x => x * x;
  console.log(`7) ${cbType} result:`, applyCallback(n, callbackFunc));

