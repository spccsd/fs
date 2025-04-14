import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }
    switch (operation) {
      case 'add':
        setResult(a + b);
        break;
      case 'sub':
        setResult(a - b);
        break;
      case 'mul':
        setResult(a * b);
        break;
      case 'div':
        setResult(b !== 0 ? a / b : "Cannot divide by zero");
        break;
      default:
        setResult(null);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Simple Calculator</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number" />
      <br /><br />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number" />
      <br /><br />
      <button onClick={() => handleCalculation('add')}>Add</button>
      <button onClick={() => handleCalculation('sub')}>Subtract</button>
      <button onClick={() => handleCalculation('mul')}>Multiply</button>
      <button onClick={() => handleCalculation('div')}>Divide</button>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;

