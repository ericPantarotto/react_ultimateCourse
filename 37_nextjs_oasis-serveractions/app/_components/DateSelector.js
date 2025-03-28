'use client';

import PropTypes from 'prop-types';
// import { DayPicker } from 'react-day-picker';
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from 'date-fns';
import { usePathname } from 'next/navigation';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useReservation } from '../contexts/ReservationContext';

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  let { range, setRange, resetRange } = {};
  const pathname = usePathname();
  if (pathname.includes('cabins')) {
    ({ range, setRange, resetRange } = useReservation());
  } else {
    ({
      rangeBooking: range,
      setRangeBooking: setRange,
      resetRangeBooking: resetRange,
    } = useReservation());
  }

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const defaultClassNames = getDefaultClassNames();

  // CHANGE
  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange?.to, displayRange?.from);
  const cabinPrice = numNights * (regularPrice - discount);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className='flex flex-col justify-center'>
      <DayPicker
        className='place-self-center pt-10'
        classNames={{
          today: `border-amber-500`, // Add a border to today's date
          selected: `bg-accent-500 border-amber-500 text-white`, // Highlight the selected day
          root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
          chevron: `fill-[#c69963]`, // Change the color of the chevron
          range_start: `ring ring-accent-500 ring-offset-1 border-accent-500`,
          range_middle: 'ring ring-accent-500 ring-offset-1 border-accent-500',
          range_end: 'ring ring-accent-500 ring-offset-1 border-accent-500',
          // range_end: `border border-accent-500`,
        }}
        mode='range'
        // disabled={{ before: new Date() }}
        disabled={(currDate) =>
          isPast(currDate) ||
          bookedDates.some((date) => isSameDay(date, currDate))
        }
        min={minBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        endMonth={new Date(new Date().getFullYear() + 5, new Date().getMonth())}
        captionLayout='dropdown'
        selected={displayRange}
        // onSelect={setRange}
        onSelect={(newRange) => {
          isAlreadyBooked(newRange, bookedDates) ? {} : setRange(newRange);
        }}
        footer={
          displayRange
            ? displayRange.from && displayRange.to
              ? `${displayRange.from.toLocaleDateString()} - ${displayRange.to.toLocaleDateString()}`
              : 'Pick departure.'
            : 'Pick arrival .'
        }
        // numberOfMonths={2}
      />

      <div className='bg-accent-500 text-primary-800 flex h-[72px] items-center justify-between px-8'>
        <div className='flex items-baseline gap-6'>
          <p className='flex items-baseline gap-2'>
            {discount > 0 ? (
              <>
                <span className='text-2xl'>${regularPrice - discount}</span>
                <span className='text-primary-700 font-semibold line-through'>
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className='text-2xl'>${regularPrice}</span>
            )}
            <span className=''>/night</span>
          </p>
          {numNights ? (
            <>
              <p className='bg-accent-600 px-3 py-2 text-2xl'>
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className='text-lg font-bold uppercase'>Total</span>{' '}
                <span className='text-2xl font-semibold'>${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        <button
          className='border-primary-800 border px-4 py-2 text-sm font-semibold'
          onClick={resetRange}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
export default DateSelector;

DateSelector.propTypes = {
  settings: PropTypes.shape({
    minBookingLength: PropTypes.number.isRequired,
    maxBookingLength: PropTypes.number.isRequired,
  }).isRequired,
  bookedDates: PropTypes.array,
  cabin: PropTypes.object,
};
