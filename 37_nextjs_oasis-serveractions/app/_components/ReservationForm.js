'use client';
import { differenceInDays } from 'date-fns';
import PropTypes from 'prop-types';
import { createBooking } from '../_lib/actions';
import { useReservation } from '../contexts/ReservationContext';
import SubmitButton from './SubmitButton';

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();

  const { maxCapacity, regularPrice, discount, id } = cabin;
  const numNights = differenceInDays(range?.to, range?.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate: range?.from,
    endDate: range?.to,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className='flex scale-[1.01] flex-col justify-between'>
      <div className='bg-primary-800 text-primary-300 flex items-center justify-between px-16 py-2'>
        <p>Logged in as</p>

        <div className='flex items-center gap-4'>
          <img
            // Important to display google profile images
            referrerPolicy='no-referrer'
            className='h-8 rounded-full'
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      {range?.from && range?.to && (
        <p className='bg-primary-900 text-primary-300 flex items-center justify-between px-16 py-2'>
          Booked Dates: {String(range.from.toLocaleDateString())} to{' '}
          {String(range.to.toLocaleDateString())}
        </p>
      )}

      <form
        className='bg-primary-900 flex flex-grow flex-col gap-5 px-16 py-10 text-lg'
        // action={
        //   pathname.includes('cabins') ? createBookingWithData : updateBooking
        // }
        action={async (formData) => {
          resetRange();
          await createBookingWithData(formData);
        }}
      >
        <div className='space-y-2'>
          <label htmlFor='numGuests'>How many guests?</label>
          <select
            name='numGuests'
            id='numGuests'
            className='bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm'
            required
          >
            <option value='' key=''>
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations'>
            Anything we should know about your stay?
          </label>
          <textarea
            name='observations'
            id='observations'
            className='bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm'
            placeholder='Any pets, allergies, special requirements, etc.?'
          />
        </div>

        <div className='flex items-center justify-end gap-6'>
          {(!range?.from || !range?.to) && (
            <p className='text-primary-300 ring-accent-500 border-accent-900 text-base ring ring-offset-1'>
              Start by selecting dates
            </p>
          )}

          <SubmitButton
            pendingLabel='Reserving...'
            isDisabled={!range?.from || !range?.to}
          >
            Reserve now
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;

ReservationForm.propTypes = {
  cabin: PropTypes.object,
  user: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }),
  booking: PropTypes.shape({
    id: PropTypes.string,
    numGuests: PropTypes.number,
    observations: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
};
