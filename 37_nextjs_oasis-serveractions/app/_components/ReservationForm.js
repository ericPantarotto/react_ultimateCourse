'use client';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { updateBooking } from '../_lib/actions';
import { useReservation } from '../contexts/ReservationContext';
import SubmitButton from './SubmitButton';

function ReservationForm({ cabin, user, booking }) {
  let { range, setRange } = useReservation();
  const { maxCapacity } = cabin;

  useEffect(
    () =>
      booking &&
      setRange({
        from: new Date(booking.startDate),
        to: new Date(booking.endDate),
      }),
    [],
  );

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
        action={updateBooking}
      >
        <div>
          <input name='id' hidden defaultValue={booking?.id} />
          <input
            name='startDate'
            hidden
            value={range?.from ?? ''}
            onChange={() =>
              setRange((prev) => ({ ...prev, startDate: range?.from }))
            }
            readOnly
          />
          <input
            name='endDate'
            hidden
            value={range?.to ?? ''}
            onChange={() =>
              setRange((prev) => ({ ...prev, endDate: range?.to }))
            }
            readOnly
          />
        </div>
        <div className='space-y-2'>
          <label htmlFor='numGuests'>How many guests?</label>
          <select
            name='numGuests'
            id='numGuests'
            className='bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm'
            required
            defaultValue={booking?.numGuests}
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
            defaultValue={booking?.observations}
          />
        </div>

        <div className='flex items-center justify-end gap-6'>
          {(!range.from || !range.to) && (
            <p className='text-primary-300 ring-accent-500 border-accent-900 text-base ring ring-offset-1'>
              Start by selecting dates
            </p>
          )}

          <SubmitButton
            pendingLabel='Updating...'
            isDisabled={!range.from || !range.to}
          >
            {booking ? 'Update booking' : 'Reserve now'}
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
