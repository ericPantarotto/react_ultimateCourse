import './App.css';

function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form() {
  return (
    <form className='add-form'>
      <h3>What do you need for your 😍 trip?</h3>
    </form>
  );
}

function PackingList() {
  return <div className='list'>List</div>;
}

function Stats() {
  return (
    <footer className='stats'>
      💼 You have X items on your list, and you already packed Y (...%)
    </footer>
  );
}
export default App;
