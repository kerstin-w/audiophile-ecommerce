import NavigationItems from './NavigationItems';

function NavigationMobile({ isOpen, toggleMenu }) {
  return (
    <nav
      className={`fixed z-40 left-0 w-full h-screen bg-black backdrop-blur-sm  bg-opacity-75 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:hidden'
      } md:hidden`}
    >
      <div
        className={`fixed left-0 w-min z-40 h-screen bg-primary-200 transition-transform transform py-6 pl-6 pr-12 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:hidden'
        } md:hidden`}
      >
        <ul className="flex flex-col">
          <NavigationItems toggleMenu={toggleMenu} />
        </ul>
      </div>
    </nav>
  );
}

export default NavigationMobile;
