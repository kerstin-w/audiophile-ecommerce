'use client';
import { useState } from 'react';
import Logo from './Logo';
import NavCart from './NavCart';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';
import Hamburger from './Hamburger';
import Cart from '../../Cart';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary-200 text-white">
      <div className="xl:mx-36 md:mx-24 md:my-12 px-6 py-6 md:px-0 flex justify-between border-b border-primary-100 pb-8">
        <div className="md:hidden flex items-end mr-5">
          <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />
        </div>
        <Logo />
        <NavigationDesktop />
        <NavCart setIsModalOpen={setIsModalOpen} />
      </div>
      <NavigationMobile isOpen={isOpen} toggleMenu={toggleMenu} />

      <Cart isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}

export default Header;
