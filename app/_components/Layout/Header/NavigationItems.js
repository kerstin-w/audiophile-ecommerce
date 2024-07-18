'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import menuItems from '../../../_data/menuItems';

function NavigationItems({ toggleMenu }) {
  const pathname = usePathname();

  const getClassNames = (itemPath, isLast) =>
    `uppercase hover:text-primary-300 font-bold tracking-wider py-4 md:py-0 ${
      pathname === itemPath ? 'text-primary-300 ' : ''
    } ${!isLast ? 'pr-6' : ''}`;

  return (
    <>
      {menuItems.map((item, index) => {
        const isLast = index === menuItems.length - 1;
        const classNames = useMemo(
          () => getClassNames(item.path, isLast),
          [pathname, isLast, item.path]
        );

        return (
          <li key={item.path} onClick={toggleMenu} className={classNames}>
            <Link href={item.path}>
              <p>{item.name}</p>
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default NavigationItems;
