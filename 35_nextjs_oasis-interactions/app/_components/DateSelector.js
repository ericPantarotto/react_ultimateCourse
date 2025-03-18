'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
// import { DayPicker } from 'react-day-picker';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

// function DateSelector({ settings, bookedDates, cabin }) {
function DateSelector({ settings }) {
  const [selected, setSelected] = useState();
  const defaultClassNames = getDefaultClassNames();
  // CHANGE
  const regularPrice = 23;
  const discount = 23;
  const numNights = 23;
  const cabinPrice = 23;
  const range = { from: null, to: null };

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className='flex flex-col justify-center'>
      <DayPicker
        // className='place-self-center pt-12'
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
        disabled={{ before: new Date() }}
        min={minBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        endMonth={new Date(new Date().getFullYear() + 5, new Date().getMonth())}
        captionLayout='dropdown'
        selected={selected}
        onSelect={setSelected}
        footer={
          selected
            ? selected.from && selected.to
              ? `${selected.from.toLocaleDateString()} - ${selected.to.toLocaleDateString()}`
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

        {range.from || range.to ? (
          <button className='border-primary-800 border px-4 py-2 text-sm font-semibold'>
            Clear
          </button>
        ) : null}
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
