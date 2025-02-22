import PropTypes from 'prop-types';
import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, ingredients, isLoadingIngredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className='space-y-1 py-3'>
      <div className='flex items-center justify-between gap-4 text-sm'>
        <p>
          <span className='font-bold'>{quantity}&times;</span> {name}
        </p>
        <p className='font-bold'>{formatCurrency(totalPrice)}</p>
      </div>
      <p className='text-sm text-stone-500 capitalize italic'>
        {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
      </p>
    </li>
  );
}
OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoadingIngredients: PropTypes.bool.isRequired,
};

export default OrderItem;
