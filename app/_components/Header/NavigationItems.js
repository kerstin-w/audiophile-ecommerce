'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import menuItems from '../../_data/menuItems';

function NavigationItems({ isOpen, toggleMenu }) {
  const router = usePathname();
  return (
    <>
      {menuItems.map((item, index) => (
        <li
          key={item.path}
          onClick={toggleMenu}
          className={`uppercase hover:text-primary-300 font-bold tracking-wider py-4 md:py-0${
            router === item.path ? 'text-primary-300 ' : ''
          } ${index !== menuItems.length - 1 ? 'pr-6' : ''}`}
        >
          <Link href={item.path}>
            <p>{item.name}</p>
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavigationItems;
