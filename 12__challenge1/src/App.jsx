import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(100);
  const [fromCur, setFromCur] = useState('USD');
  const [toCur, setToCur] = useState('EUR');
  const [converted, setConverted] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(curr1, curr2);

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchFxRate() {
        setIsLoading(true);
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`,
            { signal: controller.signal }
          );
          const data = await res.json();
          setConverted(data.rates[toCur]);
        } catch (err) {
          if (err.name !== 'AbortError' && err.name !== 'TypeError')
            console.log(err.name);
        } finally {
          setIsLoading(false);
        }
      }

      if (fromCur === toCur) return setConverted(amount); //returns an error, short-circuiting the call of the function with try/catch

      fetchFxRate();

      return function () {
        controller.abort();
      };
    },
    [amount, fromCur, toCur]
  );

  return (
    <div>
      <input
        type='text'
        value={amount}
        onChange={(e) =>
          setAmount(Number(e.target.value) < 0 ? 100 : Number(e.target.value))
        }
      />
      <select
        onChange={(e) => setFromCur(e.target.value)}
        value={fromCur}
        disabled={isLoading}
      >
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
      </select>
      <select
        onChange={(e) => setToCur(e.target.value)}
        value={toCur}
        disabled={isLoading}
      >
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
      </select>
      <p>
        {converted.toLocaleString()} {toCur}
      </p>
    </div>
  );
}

export default App;
