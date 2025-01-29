import PropTypes from 'prop-types';

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  const getButtonClass = (index) => {
    let className = 'btn btn-option';
    if (index === answer) className += ' answer';
    if (hasAnswered) {
      if (index === question.correctOption) {
        className += ' correct';
      } else {
        className += ' wrong';
      }
    }
    return className;
  };

  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          className={getButtonClass(index)}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

Options.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    correctOption: PropTypes.number.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.number,
};

export default Options;
