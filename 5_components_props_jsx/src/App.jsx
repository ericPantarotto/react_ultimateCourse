// import React from 'react';
import PropTypes from 'prop-types';
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
      <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozzarella, spinach, and ricotta cheese'
        photoName='../pizzas/spinaci.jpg'
        price={10}
      />
      <Pizza
        name='Pizza Funghi'
        ingredients='Tomato, mozzarella, and mushrooms'
        photoName='../pizzas/funghi.jpg'
        price={9.5}
      />
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
    <div className='pizza'>
      <img src={props.photoName} alt='pizza spinaci' />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

Pizza.propTypes = {
  name: PropTypes.string,
  ingredients: PropTypes.string,
  photoName: PropTypes.string,
  price: PropTypes.integer,
};
export default App;
