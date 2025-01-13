import { useState } from 'react';
import './App.css';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function App() {
  const [step, setStep] = useState(1);
  // const step = 1;
  // const [person, setPerson] = useState({ name: 'Eric' });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // console.log('prev');

    // FIX: this is not the correct way of doing
    // if (step > 1) setStep(step - 1);

    // ERROR: this wouldn't work
    // if (step > 1) {
    //   setStep(step - 1);
    //   setStep(step - 1);
    // }

    if (step > 1) setStep((prev) => prev - 1);
  }

  function handleNext() {
    // () => console.log('next');
    if (step < 3) setStep((prev) => prev + 1);

    // ERROR: bad practice
    // person.name = 'Jonas'
    // setPerson({ name: 'Fred' });
  }

  function reset() {
    setStep(1);
  }

  return (
    <>
      <button className='close' onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
            <button onClick={reset}>Reset</button>
          </div>

          <p className='message'>
            Step {step}: {messages[step - 1]}
            {/* <span>{person.name}</span> */}
          </p>

          <div className='buttons'>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              // className='previous'
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              className='next'
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
