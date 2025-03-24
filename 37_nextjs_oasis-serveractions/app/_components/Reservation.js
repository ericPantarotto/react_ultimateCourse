import PropTypes from 'prop-types';
import { auth } from '../_lib/auth';
import { getBookedDatesByCabinId, getSettings } from '../_lib/data-service';
import DateSelector from './DateSelector';
import LoginMessage from './LoginMessage';
import ReservationForm from './ReservationForm';

async function Reservation({ cabin, booking }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id, booking?.guestId),
  ]);
  const session = await auth();

  return (
    <div className='border-primary-800 grid min-h-[400px] grid-cols-2 border'>
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} booking={booking} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;

Reservation.propTypes = {
  cabin: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  booking: PropTypes.object,
};
