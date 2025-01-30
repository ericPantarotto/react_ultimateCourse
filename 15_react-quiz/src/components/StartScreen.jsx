import PropTypes from 'prop-types';

function StartScreen({ numQuestions, dispatch, highscore }) {
  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <h4>Your current highscore is: {highscore}</h4>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'start' })}
      >
        Let&apos;s start
      </button>
    </div>
  );
}

StartScreen.propTypes = {
  numQuestions: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  highscore: PropTypes.number.isRequired,
};

export default StartScreen;
