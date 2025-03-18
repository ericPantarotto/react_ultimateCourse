import PropTypes from 'prop-types';
import { getBookedDatesByCabinId, getSettings } from '../_lib/data-service';
import DateSelector from './DateSelector';
import ReservationForm from './ReservationForm';

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className='border-primary-800 grid min-h-[400px] grid-cols-2 border bg-red-400'>
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservation;

Reservation.propTypes = {
  cabin: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
