import { ReactNode } from 'react';
import { Product } from '../models/types';
import ProductButton from './ProductButton';
import './ProductCard.css';
import ProductCardContext from './ProductCartContext';
import ProductCategory from './ProductCategory';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import ProductPrice from './ProductPrice';
import ProductRating from './ProductRating';
import ProductTitle from './ProductTitle';

type Props = {
  product: Product;
  info?: ReactNode;
  image?: ReactNode;
  action?: ReactNode;
};

function ProductCard({ product, info, image, action }: Props) {
  return (
    <ProductCardContext.Provider value={{ product }}>
      <div className='product-card'>
        {image}
        <div className='product-card-bottom'>
          {info}
          {action}
        </div>
      </div>
    </ProductCardContext.Provider>
  );
}

ProductCard.Info = ProductInfo;
ProductCard.Title = ProductTitle;
ProductCard.Category = ProductCategory;
ProductCard.Image = ProductImage;
ProductCard.Rating = ProductRating;
ProductCard.Price = ProductPrice;
ProductCard.Button = ProductButton;

export default ProductCard;

// NOTE: image, info, action are optional props, also called slots
