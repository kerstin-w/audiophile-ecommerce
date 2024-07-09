import Image from 'next/image';
import Link from 'next/link';
import cart from '@/public/shared/desktop/icon-cart.svg';

function NavCart() {
  return (
    <Link href="/">
      <Image
        src={cart}
        height="20"
        width="23"
        quality={90}
        alt="Icon shopping cart"
      />
    </Link>
  );
}

export default NavCart;
