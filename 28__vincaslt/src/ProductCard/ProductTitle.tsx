import { useProductCardContext } from '../hooks/useProductCardContext';

function ProductTitle() {
  const { product } = useProductCardContext();
  return <div className='product-title'>{product.title}</div>;
}

export default ProductTitle;
