import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Counter</h2>
      <p>Current count: {count}</p>
      <div>
        <label>
          Step: 
          <input 
            type="number" 
            value={step} 
            onChange={e => setStep(Number(e.target.value))} 
            style={{ width: '50px', marginLeft: '10px' }}
          />
        </label>
      </div>
      <button onClick={() => setCount(count + step)}>Increment</button>
      <button onClick={() => setCount(count - step)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <div style={{ marginTop: '20px' }}>
        <p>The step determines the amount by which the count is incremented or decremented.</p>
        <p>Try changing the step value and see the effect.</p>
      </div>
    </div>
  );
}

export default Counter;
