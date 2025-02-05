import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:8001';

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        const displayErr = err.message.includes('NetworkError')
          ? 'Failed to fetch data...'
          : err.message;
        console.error(displayErr);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  async function getCity(id) {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data);
      } catch (err) {
        const displayErr = err.message.includes('NetworkError')
          ? err.message
          : `Failed to fetch data for the city ${id}`;
        console.error(displayErr);
      } finally {
        setIsLoading(false);
      }
    }, 500);
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesContext, CitiesProvider };

CitiesProvider.propTypes = {
  children: PropTypes.node,
};
