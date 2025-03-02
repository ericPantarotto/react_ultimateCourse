import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
// 1. Create a context
const CounterContext = createContext();

// 2. Create parent component
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

// 3. Create child components to help implementing the common task
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}


function Label({ children }) {
  return <span>{children}</span>;
}
Label.propTypes = {
  children: PropTypes.node.isRequired,
};

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}
Increase.propTypes = {
  icon: PropTypes.string.isRequired,
};

function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}
Decrease.propTypes = {
  icon: PropTypes.string.isRequired,
};

// 4. Add child components as properties to parent component
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

Counter.propTypes = {
  children: PropTypes.node,
};

export default Counter;
