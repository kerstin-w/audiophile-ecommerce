import Image from 'next/image';

function AudiogearCallout() {
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:space-x-8 lg:space-y-0 space-y-8 my-[60px] md:my-[120px] md:justify-between items-center h-fit">
      <div className=" lg:w-1/2 px-16 py-20 flex flex-col lg:text-left text-center">
        <h2 className="font-bold text-[40px] leading-[44px] tracking-[1.42857px] uppercase text-black mb-10">
          Bringing you the <span className="text-primary-300">best</span> audio
          gear
        </h2>
        <p className="font-medium text-[15px] leading-[25px] text-black opacity-50 mix-blend-normal">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="lg:w-1/2 w-full h-[320px] lg:h-[600px] relative">
        <Image
          src="/home/desktop/image-best-gear.jpg"
          alt="YX1 Earphones"
          fill={true}
          loading="lazy"
          objectPosition="50% 30%"
          className="object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default AudiogearCallout;
