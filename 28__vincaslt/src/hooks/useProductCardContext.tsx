import { useContext } from 'react';
import ProductCardContext from '../ProductCard/ProductCartContext';

export function useProductCardContext() {
  const context = useContext(ProductCardContext);
  if (!context)
    throw new Error(
      'ProductCard.* component must be rendered as child of ProductCard component'
    );

  return context;
}
