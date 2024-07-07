import NavigationItems from './NavigationItems';

function NavigationDesktop() {
  return (
    <nav className="hidden md:block">
      <ul className="flex flex-row">
        <NavigationItems />
      </ul>
    </nav>
  );
}

export default NavigationDesktop;
