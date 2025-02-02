import { PropTypes } from 'prop-types';
import { formatDate } from '../utils.js';
import styles from './CityItem.module.css';

function CityItem({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.object.isRequired,
};

export default CityItem;
