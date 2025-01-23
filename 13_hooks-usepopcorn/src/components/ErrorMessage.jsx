import PropTypes from 'prop-types';

export const ErrorMessage = ({ message }) => (
  <p className='error'>
    <span>⛔ </span>
    {message}
  </p>
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
};
