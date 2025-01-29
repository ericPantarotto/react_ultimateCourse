import { useEffect } from "react";
import PropTypes from 'prop-types';

function Timer({ secondsRemaining , dispatch }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const timerId = setInterval(function () {
        dispatch({ type: 'tick' });
      }, 1000);

      return () => clearInterval(timerId);
    },
    [dispatch]
  );

  return (
    <div className='timer'>
      {mins < 10 && '0'}
      {mins}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
}

Timer.propTypes = {
  secondsRemaining: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Timer;
