import PropTypes from 'prop-types';
import { formatDay, getWeatherIcon } from '../utils/formatters.js';

export default function Day({ date, max, min, code, isToday }) {
  return (
    <li className='day'>
      <span>{getWeatherIcon(code)}</span>
      <p>{isToday ? 'Today' : formatDay(date)}</p>
      <p>
        {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
      </p>
    </li>
  );
}

Day.propTypes = {
  date: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  code: PropTypes.number,
  isToday: PropTypes.bool,
};
