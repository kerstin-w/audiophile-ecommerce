import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/shared/desktop/logo.svg';

function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        height={25}
        width={143}
        quality={90}
        alt="audiophile Logo"
      />
    </Link>
  );
}

export default Logo;
