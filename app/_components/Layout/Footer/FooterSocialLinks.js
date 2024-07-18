import Link from 'next/link';
import { IconFacebook, IconTwitter, IconInstagram } from './Icons';

const FooterSocialLinks = () => {
  return (
    <div className="flex items-center space-x-4 mb-10 transform lg:-translate-y-20">
      <Link href="/" passHref>
        <p className="hover:fill-primary-300 transition" aria-label="Facebook">
          <IconFacebook />
        </p>
      </Link>
      <Link href="/" passHref>
        <p className="hover:fill-primary-300 transition" aria-label="Instagram">
          <IconInstagram />
        </p>
      </Link>
      <Link href="/" passHref>
        <p
          className="hover:fill-primary-300 hover:text-primary-300 transition"
          aria-label="Twitter"
        >
          <IconTwitter />
        </p>
      </Link>
    </div>
  );
};

export default FooterSocialLinks;
