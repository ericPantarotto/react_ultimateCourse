import PropTypes from 'prop-types';
import { useState } from 'react';

// Structural
export function NavBar({ children }) {
  return (
    <nav className='nav-bar'>
      <Logo />
      {children}
    </nav>
  );
}
NavBar.propTypes = {
  children: PropTypes.node.isRequired
};

// Stateless
function Logo() {
  return (
    <div className='logo'>
      <span role='img'>🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

// StateFul
export function Search() {
  const [query, setQuery] = useState('');

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

// Stateless
export function NumResults({ movies }) {
  return (
    <p className='num-results'>
      {/* Found <strong>{movies.length}</strong> results */}
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
NumResults.propTypes = {
  movies: PropTypes.array,
};
