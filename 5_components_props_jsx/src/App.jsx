// import React from 'react';
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
      <Pizza />
      <Pizza />
      <Pizza />
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

function Pizza() {
  return (
    <div>
      <img src='../pizzas/spinaci.jpg' alt='pizza spinaci' />
      <h3>Pizza</h3>
      <p>Tomato, mozzarella, spinach</p>
    </div>
  );
}

export default App;
