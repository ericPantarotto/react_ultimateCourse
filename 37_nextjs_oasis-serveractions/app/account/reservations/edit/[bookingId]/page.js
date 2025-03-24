import Reservation from '@/app/_components/Reservation';
import Spinner from '@/app/_components/Spinner';
import { getBooking, getCabin } from '@/app/_lib/data-service';
import PropTypes from 'prop-types';
import { Suspense } from 'react';

export async function generateMetadata({ params }) {
  const { bookingId } = await params;

  return { title: `Booking #${bookingId} (edit)` };
}

export default async function Page({ params }) {
  const { bookingId } = await params;
  const booking = await getBooking(bookingId);
  const cabin = await getCabin(booking.cabinId);

  return (
    <div className='mx-auto mt-8 max-w-6xl'>

      <div>
        <h2 className='text-accent-500 mb-10 text-center text-5xl font-semibold'>
          Edit booking #{booking.id}, cabin {cabin.name}.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} booking={booking} />
        </Suspense>
      </div>
    </div>
  );
}

Page.propTypes = {
  params: PropTypes.shape({
    cabinId: PropTypes.string.isRequired,
  }).isRequired,
};
