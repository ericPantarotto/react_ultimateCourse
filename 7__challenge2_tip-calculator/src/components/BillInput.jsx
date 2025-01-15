import PropTypes from 'prop-types';

const BillInput = ({ billAmount, onSetBillAmount }) => (
  <div style={{ marginBottom: '15px' }}>
    <label>How much was the bill </label>
    <input
      type='text'
      value={billAmount}
      placeholder='Bill value'
      onChange={(e) => onSetBillAmount(Number(e.target.value))}
    />
  </div>
);
BillInput.propTypes = {
  billAmount: PropTypes.number.isRequired,
  onSetBillAmount: PropTypes.func.isRequired,
};

export default BillInput;
