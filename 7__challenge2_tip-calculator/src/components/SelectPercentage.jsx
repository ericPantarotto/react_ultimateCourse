import PropTypes from 'prop-types';

const service = [
  { eval: 'Dissatisfied', percentage: 0 },
  { eval: 'It was okay', percentage: 5 },
  { eval: 'It was good', percentage: 10 },
  { eval: 'Absolutely amazing', percentage: 20 },
];

const SelectPercentage = ({ children, percentage, onSelect }) => (
  <div style={{ marginBottom: '8px' }}>
    <label>{children}</label>
    <select
      value={percentage}
      onChange={(e) => onSelect(Number(e.target.value))}
    >
      {service.map((service) => (
        <option value={service.percentage} key={service.percentage}>
          {service.eval} ({service.percentage}%)
        </option>
      ))}
    </select>
  </div>
);
SelectPercentage.propTypes = {
  children: PropTypes.node.isRequired,
  percentage: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SelectPercentage;
