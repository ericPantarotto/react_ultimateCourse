import PropTypes from 'prop-types';

const DisplayBill = ({ billAmount, tip }) => (
  <h3>
    you pay ${billAmount + tip} (${billAmount} + ${tip} tip)
  </h3>
);
DisplayBill.propTypes = {
  billAmount: PropTypes.number.isRequired,
  tip: PropTypes.number.isRequired,
};

export default DisplayBill;
