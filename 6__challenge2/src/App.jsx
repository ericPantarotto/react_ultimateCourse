import { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);

  let date = new Date();
  date.setDate(date.getDate() + count);

  const handleReset = () => {
    setCount(0);
    setSteps(1);
  };

  return (
    <>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
        />
        <span>{steps}</span>
      </div>

      <div>
        <button onClick={() => setCount((prev) => prev - steps)}>-</button>
        <input
          type='text'
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((prev) => prev + steps)}>+</button>
      </div>

      <div>
        {count === 0 && <h3>Today is {date.toDateString()}</h3>}
        {count > 0 && (
          <h3>
            {count} {count === 1 ? 'day' : 'days'} from today will be{' '}
            {date.toDateString()}
          </h3>
        )}
        {count < 0 && (
          <h3>
            {Math.abs(count)} {count === -1 ? 'day' : 'days'} ago was{' '}
            {date.toDateString()}
          </h3>
        )}
      </div>

      {(count !== 0 || steps !== 1) && (
        <button
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
          onClick={handleReset}
        >
          Reset
        </button>
      )}
    </>
  );
}

function App() {
  return <Counter />;
}

export default App;
