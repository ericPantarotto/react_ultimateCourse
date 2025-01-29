import PropTypes from 'prop-types';

function NextButton({ dispatch, answer }) {
  if (answer === null) return null;

  // if (index < numQuestions - 1)
  return (
    <button
      className='btn btn-ui'
      onClick={() => dispatch({ type: 'nextQuestion' })}
    >
      Next
    </button>
  );

  // if (index === numQuestions - 1)
  //   return (
  //     <button
  //       className='btn btn-ui'
  //       onClick={() => dispatch({ type: 'finish' })}
  //     >
  //       Finish
  //     </button>
  //   );
}

NextButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.number,
};

export default NextButton;
