import { useCallback, useEffect, useState } from 'react';
import { Box, WatchedMoviesList, WatchedSummary } from './components/Box';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Main } from './components/Main';
import { MovieDetails } from './components/MovieDetails';
import { MovieList } from './components/MovieList';
import { NavBar, NumResults, Search } from './components/NavBar';
import { useMovies } from './hooks/useMovies';

export default function AppHooks() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const handleCloseMovie = useCallback(() => setSelectedId(null), []);
  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);

  const [watched, setWatched] = useState(function () {
    const storedValue = localStorage.getItem('watched');
    return JSON.parse(storedValue);
  });

  useEffect(
    function () {
      localStorage.setItem('watched', JSON.stringify(watched));
    },
    [watched]
  );

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  // function handleCloseMovie() {
  //   setSelectedId(null);
  // }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
