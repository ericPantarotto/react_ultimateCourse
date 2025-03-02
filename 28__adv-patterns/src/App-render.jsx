import { faker } from '@faker-js/faker';
import PropTypes from 'prop-types';
import { useState } from 'react';

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

function List({ title, items, render }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const displayItems = isCollapsed ? items.slice(0, 3) : items;

  function toggleOpen() {
    setIsOpen((isOpen) => !isOpen);
    setIsCollapsed(false);
  }

  return (
    <div className='list-container'>
      <div className='heading'>
        <h2>{title}</h2>
        <button onClick={toggleOpen}>
          {isOpen ? <span>&or;</span> : <span>&and;</span>}
        </button>
      </div>
      {isOpen && (
        <ul className='list'>
          {/* {displayItems.map((product) => (
            <ProductItem key={product.productName} product={product} />
          ))} */}
          {displayItems.map(render)}
        </ul>
      )}

      <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
        {isCollapsed ? `Show all ${items.length}` : 'Show less'}
      </button>
    </div>
  );
}
List.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
};

export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      <div className='col-2'>
        <List
          title='Products'
          items={products}
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />

        <List
          title='Companies'
          items={companies}
          render={(company) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={true}
            />
          )}
        />
      </div>
    </div>
  );
}

// LATER: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
// function ProductList({ title, items }) {
//   return (
//     <ul className='list'>
//       {items.map((product) => (
//         <ProductItem key={product.productName} product={product} />
//       ))}
//     </ul>
//   );
// }

const companies = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});

function CompanyItem({ company, defaultVisibility }) {
  const [isVisible, setIsVisible] = useState(defaultVisibility);

  return (
    <li
      className='company'
      onMouseEnter={() => setIsVisible(!defaultVisibility)}
      onMouseLeave={() => setIsVisible(defaultVisibility)}
      // onMouseEnter={() => setIsVisible(true)}
      // onMouseLeave={() => setIsVisible(false)}
    >
      <p className='company-name'>{company.companyName}</p>
      {isVisible && (
        <p className='company-phrase'>
          <strong>About:</strong> {company.phrase}
        </p>
      )}
    </li>
  );
}

CompanyItem.propTypes = {
  company: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    phrase: PropTypes.string.isRequired,
  }).isRequired,
  defaultVisibility: PropTypes.bool.isRequired,
};
