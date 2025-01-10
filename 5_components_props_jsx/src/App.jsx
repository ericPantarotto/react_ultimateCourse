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

      {pizzas.length > 0 && (
        <ul className='pizzas'>
          {pizzas.map((pizza) => (
            <Pizza key={pizza.name} pizzaObject={pizza} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log('We\'re currently open!');

  return (
    <footer className='footer'>
      {isOpen && (
        <div className='order'>
          <p>
            {new Date().toLocaleDateString()}: We&apos;re open until {closeHour}
            :00. Come visit us or order online.
          </p>
          <button className='btn'>Order</button>
        </div>
      )}
    </footer>

    /* <footer className='footer'>
      {new Date().toLocaleDateString()}: We&apos;re currently open!
    </footer> */
  );
  // return React.createElement('footer', null, 'We\'re currently open! ')
}

function Pizza(props) {
  return (
    <li className='pizza'>
      <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>{props.pizzaObject.price}</span>
      </div>
    </li>
  );
}
Pizza.propTypes = {
  pizzaObject: PropTypes.object,
};
export default App;
