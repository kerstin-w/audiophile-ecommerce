import Cta from '../Cta';

function HeroBanner() {
  return (
    <div className="heroBanner">
      <div className="xl:mx-36 md:mx-24 md:my-36 md:w-1/3 h-full md:block flex flex-col items-center justify-center">
        <p className="uppercase tracking-widest text-white font-normal opacity-50 pb-5 text-center md:text-left">
          New Product
        </p>
        <h1 className="text-white font-bold text-6xl leading-tight uppercase text-center md:text-left pb-5">
          XX99 Mark II HeadphoneS
        </h1>
        <p className="font-medium text-[15px] leading-[25px] text-white text-center md:text-left mix-blend-normal opacity-75 w-4/5 pb-5">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Cta path="/products/xx99-mark-two-headphones">See Product</Cta>
      </div>
    </div>
  );
}

export default HeroBanner;
