'use client';

import { useState } from 'react';
import BuyButton from '../../BuyButton';
import { useShoppingCart } from '@/app/_context/ShoppingCartContext';

function QuantitySelector({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useShoppingCart();

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center bg-gray-100 px-4 py-2">
        <button
          className="text-gray-500 focus:outline-none hover:text-primary-300"
          onClick={decrementQuantity}
        >
          -
        </button>
        <span className="mx-6">{quantity}</span>
        <button
          className="text-gray-500 focus:outline-none hover:text-primary-300"
          onClick={incrementQuantity}
        >
          +
        </button>
      </div>
      <BuyButton handleAddToCart={handleAddToCart}>Add to cart</BuyButton>
    </div>
  );
}

export default QuantitySelector;
