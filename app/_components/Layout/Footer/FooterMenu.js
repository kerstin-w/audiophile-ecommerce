import { useMemo } from 'react';
import Link from 'next/link';
import menuItems from '@/app/_data/menuItems';

const FooterMenu = () => {
  const renderedMenuItems = useMemo(
    () =>
      menuItems.map((item) => (
        <li key={item.path}>
          <Link href={item.path}>
            <p className="font-bold hover:text-primary-300 uppercase transition">
              {item.name}
            </p>
          </Link>
        </li>
      )),
    [menuItems]
  );

  return (
    <nav>
      <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        {renderedMenuItems}
      </ul>
    </nav>
  );
};

export default FooterMenu;
