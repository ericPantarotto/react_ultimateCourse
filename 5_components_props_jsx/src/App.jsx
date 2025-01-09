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
