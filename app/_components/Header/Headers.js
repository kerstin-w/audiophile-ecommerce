'use client';
import { useState } from 'react';
import Logo from './Logo';
import NavCart from './NavCart';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';
import Hamburger from './Hamburger';

function Headers() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white">
      <div className="md:mx-36 md:my-12 px-6 py-6 flex justify-between border-b border-primary-100 pb-8">
        <div className="md:hidden flex items-end mr-5">
          <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />
        </div>
        <Logo />
        <NavigationDesktop />
        <NavCart />
      </div>
      <NavigationMobile isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Headers;
