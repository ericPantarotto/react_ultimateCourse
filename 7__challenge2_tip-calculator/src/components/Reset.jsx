import PropTypes from 'prop-types';

const Reset = ({ onReset }) => {
  return <button onClick={onReset}>Reset</button>;
};
Reset.propTypes = {
  onReset: PropTypes.func.isRequired,
};

export default Reset;
