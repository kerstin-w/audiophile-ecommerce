'use client';
import { useState } from 'react';
import Cta from '../../Cta';

function QuantitySelector({ product }) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center bg-gray-100 px-4 py-2">
        <button
          className="text-gray-500 focus:outline-none"
          onClick={decrementQuantity}
        >
          -
        </button>
        <span className="mx-6">{quantity}</span>
        <button
          className="text-gray-500 focus:outline-none"
          onClick={incrementQuantity}
        >
          +
        </button>
      </div>
      <Cta path={`/products/${product.slug}`}>See Product</Cta>
    </div>
  );
}

export default QuantitySelector;
