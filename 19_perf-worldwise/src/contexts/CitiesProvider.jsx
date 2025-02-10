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

  async function createCity(newCity) {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const res = await fetch(`${BASE_URL}/cities`, {
          method: 'POST',
          body: JSON.stringify(newCity),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setCities((cities) => [...cities, data]);
        setCurrentCity({});
        // setCurrentCity(data);
      } catch {
        console.error('There was an error creating the city...');
      } finally {
        setIsLoading(false);
      }
    }, 500);
  }

  async function deleteCity(id) {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        await fetch(`${BASE_URL}/cities/${id}`, {
          method: 'DELETE',
        });
        setCities((cities) => cities.filter((city) => city.id !== id));
        setCurrentCity({});
      } catch {
        console.error('There was an error DELETING the city...');
      } finally {
        setIsLoading(false);
      }
    }, 500);
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        setCurrentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesContext, CitiesProvider };

CitiesProvider.propTypes = {
  children: PropTypes.node,
};
