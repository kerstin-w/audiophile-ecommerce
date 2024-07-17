'use client';

import { useShoppingCart } from '@/app/_context/ShoppingCartContext';
import { useFormStatus } from 'react-dom';
import Image from 'next/image';

function Summary({ children, pendingLabel }) {
  const { pending } = useFormStatus();
  const { cart, getCartTotal } = useShoppingCart();
  const vat = getCartTotal() * 0.2;

  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-white py-8 px-10 rounded-lg shadow-md flex flex-col">
        <h2 className="font-bold text-lg text-black racking-wider mb-8 uppercase">
          Summary
        </h2>
        <ul>
          {cart.map((item) => {
            const itemName = item.name.replace(
              /( Earphones| Headphones| Speaker)$/,
              ''
            );
            return (
              <li
                key={item.id}
                className="flex justify-between items-center mb-5"
              >
                <div className="flex flex-row items-center w-full">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={item['image/mobile']}
                      alt={item.name}
                      fill
                      className="object-cover w-16 h-16 mr-4 rounded-lg"
                    />
                  </div>
                  <div className="ml-6">
                    <p className="font-bold mb-1">{itemName}</p>
                    <p className="text-gray-500 font-semibold">
                      $ {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <p className="text-gray-500 font-semibold ">
                    x{item.quantity}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="space-y-2 mt-4">
          <div className="flex justify-between">
            <span className="text-gray-500 uppercase">Total</span>
            <span className="font-bold">
              $ {getCartTotal().toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 uppercase">VAT (INCLUDED)</span>
            <span className="font-bold">
              $ {Math.round(vat).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between pt-4 pb-6">
            <span className="text-gray-500">GRAND TOTAL</span>
            <span className="font-bold text-primary-300">
              $ {getCartTotal().toLocaleString()}
            </span>
          </div>
        </div>
        <button
          className="inset-0 bg-primary-300 text-white transform uppercase font-bold text-[13px] leading-[18px] tracking-[1px] transition-colors duration-300 hover:bg-accent-300 px-7 py-3 disabled:bg-gray-500 disabled:text-gray-300"
          disabled={pending}
          type="submit"
        >
          {pending ? pendingLabel : children}
        </button>
      </div>
    </div>
  );
}

export default Summary;
