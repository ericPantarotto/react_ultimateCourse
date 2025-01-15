import PropTypes from 'prop-types';

const StepMessage = ({ children, step }) => (
  <div className='message'>
    <h3>Step {step}</h3>
    {children}
  </div>
);
StepMessage.propTypes = {
  children: PropTypes.node.isRequired,
  step: PropTypes.number.isRequired,
};

export default StepMessage;
