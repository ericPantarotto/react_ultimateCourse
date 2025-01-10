// import React from 'react';
import PropTypes from 'prop-types';
import { pizzaData } from '../data';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // NOTE: inline styling
  // const style = {
  //   color: 'lightgreen',
  //   fontSize: '48px',
  //   textTransform: 'uppercase',
  // };
  // return <h1 style={style}>Fast React Pizza</h1>;

  return (
    <header className='header'>
      <h1 className=''>Fast React Pizza</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  return (
    <main className='menu'>
      <h2>Our menu</h2>

      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stove oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} pizzaObject={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We&apos;re still working on our menu. Please come back later. </p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We&apos;re happy to welcome you between {openHour}:00 and {closeHour}
          :00.
        </p>
      )}
    </footer>

    /* <footer className='footer'>
      {new Date().toLocaleDateString()}: We&apos;re currently open!
    </footer> */
  );
  // return React.createElement('footer', null, 'We\'re currently open! ')
}

function Order({ closeHour, openHour }) {
  return (
    <div className='order'>
      <p>
        {new Date().toLocaleDateString()}: We&apos;re open from {openHour}:00 to{' '}
        {closeHour}:00. Come visit us or order online.
      </p>
      <button className='btn'>Order</button>
    </div>
  );
}
Order.propTypes = {
  closeHour: PropTypes.string,
  openHour: PropTypes.string,
};

function Pizza({ pizzaObject }) {
  if (pizzaObject.soldOut) return null;

  return (
    <li className='pizza'>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.price}</span>
      </div>
    </li>
  );
}
Pizza.propTypes = {
  pizzaObject: PropTypes.object,
};

export default App;
