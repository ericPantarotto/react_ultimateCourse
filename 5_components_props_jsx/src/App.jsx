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
  return (
    <main className='menu'>
      <h2>Our menu</h2>

      <ul className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizzaObject={pizza} />
        ))}
      </ul>
    </main>
  );
}

function Footer() {
  // const hour = new Date().getHours();
  // const isOpen = hour >= 12 && hour <= 22;
  // console.log(isOpen);
  // console.log('We\'re currently open!');

  return (
    <footer className='footer'>
      {new Date().toLocaleDateString()}: We&apos;re currently open!
    </footer>
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
