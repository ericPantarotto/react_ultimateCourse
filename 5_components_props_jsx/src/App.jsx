// import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Header() {
  return <h1>Fast React Pizza</h1>;
}

function Menu() {
  return (
    <>
      <h2>Our menu</h2>;
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 12 && hour <= 22;
  console.log(isOpen);

  // console.log('We\'re currently open!');

  return (
    <footer>
      {new Date().toLocaleDateString()}: We&apos;re currently open!
    </footer>
  );
  // return React.createElement('footer', null, 'We\'re currently open! ')
}

function Pizza() {
  return (
    <div>
      <img src='../pizzas/spinaci.jpg' alt='pizza spinaci' />
      <h2>Pizza</h2>
      <p>Tomato, mozzarella, spinach</p>
    </div>
  );
}

export default App;
