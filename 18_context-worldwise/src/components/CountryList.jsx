import PropTypes from 'prop-types';
import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import Message from './Message';
import Spinner from './Spinner';

function CountryList({ cities, isLoading }) {
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

CountryList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default CountryList;
