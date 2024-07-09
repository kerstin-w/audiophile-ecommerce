import FooterLogo from './FooterLogo';
import FooterMenu from './FooterMenu';
import FooterDescription from './FooterDescription';
import FooterCopyright from './FooterCopyright';
import FooterSocialLinks from './FooterSocialLinks';

const Footer = () => {
  return (
    <footer className="bg-primary-200 text-white ">
      <div className="flex flex-col items-center md:items-start relative xl:mx-36 md:mx-24 mx-12">
        {/* ORANGE BAR DESIGN */}
        <div className="absolute w-[100px] h-1 bg-primary-300 md:left-0"></div>

        <div className="flex flex-col lg:flex-row lg:justify-between items-center md:items-start lg:items-center w-full lg:pt-10">
          <FooterLogo />
          <FooterMenu />
        </div>

        <FooterDescription />

        <div className="flex flex-col md:flex-row md:justify-between items-center w-full md:mt-12 lg:mt-14">
          <FooterCopyright />
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
