import { Product } from '../models/types';

function useProduct(product: Product) {
  const addToCart = () => {
    console.log('Added:', product);
  };

  return { addToCart };
}

export default useProduct;
