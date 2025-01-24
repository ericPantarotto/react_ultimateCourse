import { useEffect, useState } from 'react';

const KEY = import.meta.env.VITE_OMDB;

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      const controller = new AbortController();

      if (query.length < 4) {
        setMovies([]);
        setError('');
        return;
      }

      setIsLoading(true);
      callback?.(); //   handleCloseMovie();

      const waitFetch = setTimeout(async function fetchMovies() {
        try {
          setError('');

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error('Something went wrong with fetching movies');

          const data = await res.json();
          if (data.Response === 'False') throw new Error('Movie not found');

          setMovies(data.Search);
          setError('');
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }, 1000);

      return function () {
        controller.abort();
        clearTimeout(waitFetch);
      };
    },
    [query, callback]
  );

  return { movies, isLoading, error };
}
