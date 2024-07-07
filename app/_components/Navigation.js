import Link from 'next/link';
import menuItems from '../_data/menuItems';

function Navigation() {
  return (
    <nav>
      <ul className="flex flex-row">
        {menuItems.map((item, index) => (
          <li
            key={item.path}
            className={`uppercase font-bold hover:text-primary-300 ${
              index !== menuItems.length - 1 ? 'pr-6' : ''
            }`}
          >
            <Link href={item.path}>
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
