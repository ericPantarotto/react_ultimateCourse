import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils.js';
import styles from './CityItem.module.css';

function CityItem({ city }) {
  const { cityName, emoji, date, id, position: { lat, lng } } = city;
  
  
  return (
    <li>
      <Link to={`${id}?lat=${lat}&lng=${lng}`} className={styles.cityItem}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.object.isRequired,
};

export default CityItem;
