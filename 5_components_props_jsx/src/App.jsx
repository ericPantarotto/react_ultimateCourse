import './App.css';

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  );
}

const Pizza = () => (
  <div>
    <img src='../pizzas/spinaci.jpg' alt='pizza spinaci' />
    <h2>Pizza</h2>
    <p>Tomato, mozzarella, spinach</p>
  </div>
);

export default App;
