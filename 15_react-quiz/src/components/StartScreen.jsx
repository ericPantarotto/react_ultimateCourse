import PropTypes from 'prop-types';

function StartScreen({ numQuestions }) {
  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className='btn btn-ui'>Let&apos;s start</button>
    </div>
  );
}

StartScreen.propTypes = {
  numQuestions: PropTypes.number.isRequired,
};

export default StartScreen;
