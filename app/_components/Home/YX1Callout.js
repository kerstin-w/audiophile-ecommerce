import CtaTransparent from '../CtaTransparent';

function YX1Callout() {
  return (
    <div className="flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-8 md:justify-between ">
      <div className="bg-primary-100 shadow-lg rounded-xl md:w-1/2 bgYX1 min-h-56"></div>
      <div className="bg-primary-100 shadow-lg rounded-xl md:w-1/2 px-16 py-20 flex flex-col">
        <h3 className="font-bold text-3xl leading-9 tracking-wide uppercase text-black mb-5">
          YX1 EARPHONES
        </h3>
        <CtaTransparent path="/">See Product</CtaTransparent>
      </div>
    </div>
  );
}

export default YX1Callout;
