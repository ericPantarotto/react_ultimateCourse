import PropTypes from 'prop-types';
import { ListBox } from './ListBox';
import { WatchedBox } from './WatchedBox';

// Structural
export function Main({ movies }) {
  return (
    <main className='main'>
      <ListBox movies={movies}/>
      <WatchedBox />
    </main>
  );
}
Main.propTypes = {
  movies: PropTypes.array,
};
