import Image from 'next/image';
import CtaBlack from '../CtaBlack';

function ZX9Callout() {
  return (
    <div className="bgCircle bg-primary-300 rounded-xl flex flex-col lg:flex-row items-center text-center text-white lg:text-left py-[55px] lg:py-[20px] mb-6 md:mb-8 lg:mb-12 overflow-hidden xl:mx-36 md:mx-24 mx-12 shadow-lg">
      <div className="max-w-[180px] md:max-w-[197px] lg:max-w-[390px] lg:ml-[120px] mb-8 md:mb-16 transform lg:translate-y-24">
        <Image
          src="/home/desktop/ZX9.png"
          alt="ZX9 Speaker"
          width={390}
          height={390}
        />
      </div>
      <div className="text-white-100 md:px-28 flex flex-col items-center lg:items-start">
        <h2 className="text-white font-bold text-6xl leading-tight uppercase text-center lg:text-left">
          ZX9 <br />
          Speaker
        </h2>
        <p className="mb-6 md:mb-10 pt-8 font-medium text-base leading-6 text-white opacity-75">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.{' '}
        </p>
        <CtaBlack path="/">See Product</CtaBlack>
      </div>
    </div>
  );
}

export default ZX9Callout;
