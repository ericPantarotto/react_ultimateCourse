import PropTypes from 'prop-types';

function Progress({ numQuestions, index, answer, points, maxPossiblePoints }) {
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

Progress.propTypes = {
  numQuestions: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  answer: PropTypes.number,
  points: PropTypes.number.isRequired,
  maxPossiblePoints: PropTypes.number.isRequired,
};

export default Progress;
