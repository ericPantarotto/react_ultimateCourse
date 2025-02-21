import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '../../ui/components/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type='small' onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}
DeleteItem.propTypes = {
  pizzaId: PropTypes.string.isRequired,
};

export default DeleteItem;
