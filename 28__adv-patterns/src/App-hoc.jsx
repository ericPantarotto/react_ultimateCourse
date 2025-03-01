import { faker } from '@faker-js/faker';
import PropTypes from 'prop-types';
import withToggles from './HOC';

const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

function ProductItem({ product }) {
  return (
    <li className='product'>
      <p className='product-name'>{product.productName}</p>
      <p className='product-price'>${product.price}</p>
      <p className='product-description'>{product.description}</p>
    </li>
  );
}
ProductItem.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

// NOTE: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
function ProductList({ items }) {
  return (
    <ul className='list'>
      {items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
}
ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const ProductListWithToggles = withToggles(ProductList);

export default function App() {
  return (
    <div>
      <h1>HOC Demo</h1>

      <div className='col-2'>
        <ProductList items={products} />
        <ProductListWithToggles title='Products with Toogle' items={products} />
      </div>
    </div>
  );
}
