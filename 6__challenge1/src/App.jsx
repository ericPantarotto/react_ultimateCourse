import { useState } from 'react';
import './App.css';

function Counter() {
  const [days, setDays] = useState(0);
  const [steps, setSteps] = useState(1);

  let date = new Date();
  date.setDate(date.getDate() + days);

  const handleReset = () => {
    setDays(0);
    setSteps(1);
    date = new Date();
  };

  function handleDecreaseStep() {
    if (steps > 1) setSteps((prev) => prev - 1);
  }

  return (
    <>
      <div>
        <button onClick={handleDecreaseStep}>-</button>
        <span>Step: {steps}</span>
        <button onClick={() => setSteps((prev) => prev + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setDays((prev) => prev - steps)}>-</button>
        <span>Count: {days}</span>
        <button onClick={() => setDays((prev) => prev + steps)}>+</button>
      </div>
      <div>
        {days === 0 && <h3>Today is {date.toDateString()}</h3>}
        {days > 0 && (
          <h3>
            {days} {days === 1 ? 'day' : 'days'} from today will be{' '}
            {date.toDateString()}
          </h3>
        )}
        {days < 0 && (
          <h3>
            {Math.abs(days)} {days === -1 ? 'day' : 'days'} ago was{' '}
            {date.toDateString()}
          </h3>
        )}
      </div>
      <button
        style={{ backgroundColor: '#7950f2', color: '#fff' }}
        onClick={handleReset}
      >
        Reset
      </button>
    </>
  );
}

function App() {
  return <Counter />;
}

export default App;
