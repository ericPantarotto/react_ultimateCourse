import PropTypes from 'prop-types';

const Button = ({ children, textColor, bgColor, onClick }) => (
  <button
    style={{ backgroundColor: bgColor, color: textColor }}
    onClick={onClick}
  >
    {children}
  </button>
);
Button.propTypes = {
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
