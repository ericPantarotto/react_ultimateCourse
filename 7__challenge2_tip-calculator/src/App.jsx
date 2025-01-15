import { useState } from 'react';
import './App.css';
import BillInput from './components/BillInput';
import DisplayBill from './components/DisplayBill';
import Reset from './components/Reset';
import SelectPercentage from './components/SelectPercentage';

function App() {
  const [billAmount, setBillAmount] = useState(80);
  const [percentage, setPercentage] = useState(0);
  const [percentageFriend, setPercentageFriend] = useState(0);
  const tip = Math.round(
    billAmount * (percentage / 100 + percentageFriend / 100)
  );

  function handleSetBillAmount(amount) {
    setBillAmount(amount);
  }

  function handleSetPercentage(percentage) {
    setPercentage(percentage);
  }

  function handleReset() {
    setBillAmount(0);
    setPercentage(0);
    setPercentageFriend(0);
  }

  return (
    <>
      <BillInput
        billAmount={billAmount}
        onSetBillAmount={handleSetBillAmount}
      />
      <SelectPercentage percentage={percentage} onSelect={handleSetPercentage}>
        How did you like the service
      </SelectPercentage>
      <SelectPercentage
        percentage={percentageFriend}
        onSelect={setPercentageFriend}
      >
        How did your friend like the service
      </SelectPercentage>

      {billAmount > 0 && (
        <>
          <DisplayBill billAmount={billAmount} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
}

export default App;
