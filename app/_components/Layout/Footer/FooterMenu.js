import menuItems from '@/app/_data/menuItems';
import Link from 'next/link';

const FooterMenu = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
      {menuItems.map((item) => (
        <Link href={item.path} key={item.path}>
          <p className="font-bold hover:text-primary-300 transition">
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default FooterMenu;
