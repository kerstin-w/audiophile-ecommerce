import Image from 'next/image';
import cart from '@/public/shared/desktop/icon-cart.svg';
import { useShoppingCart } from '@/app/_context/ShoppingCartContext';

function NavCart({ setIsModalOpen }) {
  const { getTotalQuantity } = useShoppingCart();
  const totalQuantity = getTotalQuantity();
  return (
    <button onClick={() => setIsModalOpen(true)} className="relative">
      <Image
        src={cart}
        height="20"
        width="23"
        quality={90}
        alt="Icon shopping cart"
      />
      {totalQuantity > 0 && (
        <span className="absolute top-0 left-4 bg-primary-300 text-white rounded-full px-1 text-xs">
          {totalQuantity}
        </span>
      )}
    </button>
  );
}

export default NavCart;
