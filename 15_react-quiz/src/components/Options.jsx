import PropTypes from 'prop-types';

function Options({ question }) {
  return (
    <div className='options'>
      {question.options.map((option) => (
        <button className='btn btn-option' key={option}>
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
    answer: PropTypes.string.isRequired,
  }).isRequired,
};
export default Options;
