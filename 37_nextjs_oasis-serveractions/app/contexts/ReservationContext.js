'use client';

import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  const [rangeBooking, setRangeBooking] = useState(initialState);
  const resetRangeBooking = () => setRangeBooking(initialState);

  return (
    <ReservationContext.Provider
      value={{
        range,
        setRange,
        resetRange,
        rangeBooking,
        setRangeBooking,
        resetRangeBooking,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error('Context was used outside provider');
  return context;
}

export { ReservationProvider, useReservation };

ReservationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
