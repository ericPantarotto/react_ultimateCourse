import PropTypes from 'prop-types';
import { useState } from 'react';

// Structural
export function NavBar({ movies }) {
  return (
    <nav className='nav-bar'>
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  );
}
NavBar.propTypes = {
  movies: PropTypes.array,
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
function Search() {
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
function NumResults({ movies }) {
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
