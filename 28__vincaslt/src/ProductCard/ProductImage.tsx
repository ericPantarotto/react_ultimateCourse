import { useProductCardContext } from '../hooks/useProductCardContext';

function ProductImage() {
  const { product } = useProductCardContext();
  return (
    <div className='product-image'>
      <img src={product.image} alt={product.title} />
    </div>
  );
}

export default ProductImage;
