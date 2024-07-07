import Logo from './Logo';
import NavCart from './NavCart';
import Navigation from './Navigation';

function Headers() {
  return (
    <header className="bg-black text-white">
      <div className="md:mx-36 md:my-12 flex justify-between border-b border-primary-100 pb-6">
        <Logo />
        <Navigation />
        <NavCart />
      </div>
    </header>
  );
}

export default Headers;
