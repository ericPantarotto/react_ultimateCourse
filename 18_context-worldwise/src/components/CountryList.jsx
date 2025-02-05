import { useCities } from '../contexts/CitiesContext';
import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import Message from './Message';
import Spinner from './Spinner';

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return <Message message='Add your first city by clicking on the map' />;

  const countries = cities.reduce((acc, city) => {
    if (!acc.some((country) => country.country === city.country))
      //   return [...acc, { country: city.country, emoji: city.emoji }];
      acc.push({ country: city.country, emoji: city.emoji });

    return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
