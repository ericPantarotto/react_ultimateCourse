import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:8001';

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        console.log(displayErr);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesContext, CitiesProvider };

CitiesProvider.propTypes = {
  children: PropTypes.node,
};
