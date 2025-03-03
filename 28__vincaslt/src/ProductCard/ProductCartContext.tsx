import { createContext } from 'react';
import { Product } from '../models/types';

const ProductCardContext = createContext<{ product: Product } | null>(null);

export default ProductCardContext;
