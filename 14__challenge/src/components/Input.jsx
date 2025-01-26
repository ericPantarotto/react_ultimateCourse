import PropTypes from 'prop-types';

export default function Input({ location, onChangeLocation }) {
  return (
    <div>
      <input
        type='text'
        placeholder='Search from location...'
        value={location}
        onChange={(e) => onChangeLocation(e.target.value)}
      />
    </div>
  );
}

Input.propTypes = {
  location: PropTypes.string,
  onChangeLocation: PropTypes.func,
};
