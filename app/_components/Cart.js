import Image from 'next/image';
import { useShoppingCart } from '../_context/ShoppingCartContext';
import { useClickOutside } from '../_lib/hooks/useClickOutside';
import Link from 'next/link';

function Cart({ isOpen, onClose }) {
  const {
    cart,
    clearCartItems,
    updateItemQuantity,
    getCartTotal,
    getTotalQuantity,
  } = useShoppingCart();

  const modalRef = useClickOutside(() => onClose(false));
  const totalQuantity = getTotalQuantity();

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    updateItemQuantity(id, quantity);
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex md:justify-end z-50 md:items-start justify-center items-start">
      <div
        className="bg-white text-black p-7 rounded-lg shadow-lg w-96 xl:mr-36 md:mr-24 mx-auto md:mt-40 mt-32"
        ref={modalRef}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">CART ({getTotalQuantity()})</h2>
          {totalQuantity > 0 && (
            <button
              onClick={clearCartItems}
              className="text-primary-300 hover:underline"
            >
              Remove all
            </button>
          )}
        </div>
        {totalQuantity > 0 ? (
          <div>
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
                    <div className="flex flex-row items-center">
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
                    <div className="flex items-center space-x-4 bg-gray-100 py-2 px-4">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className=" hover:text-primary-300"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="hover:text-primary-300"
                      >
                        +
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex justify-between items-center mt-5 mb-5">
              <p className="text-gray-500">TOTAL</p>
              <p className="font-bold">$ {getCartTotal().toLocaleString()}</p>
            </div>
            <button className="inset-0 bg-primary-300 text-white transform uppercase font-bold text-[13px] leading-[18px] tracking-[1px] transition-colors duration-300 hover:bg-accent-300 w-full px-7 py-3">
              <Link href="/checkout">
                <p>Checkout</p>
              </Link>
            </button>
          </div>
        ) : (
          <p className="text-gray-500 mt-5">Your cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
