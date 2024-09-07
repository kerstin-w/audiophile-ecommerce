import Image from 'next/image';
import Cta from '../Cta';

export default function ProductCard({ product, index }) {
  const isEven = index % 2 === 0;
  const imageAlignmentClass = isEven ? '' : 'md:pl-8';
  const textAlignmentClass = isEven ? 'lg:pl-24 md:pl-16' : 'lg:pr-24 md:pr-16';

  return (
    <div
      className={`flex flex-col ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center md:mb-24 mb-14`}
    >
      <div
        className={`w-full md:w-1/2 h-44 md:h-auto mb-8 md:mb-0 flex justify-center bg-primary-100 rounded-lg ${imageAlignmentClass}`}
      >
        <Image
          src={product['image/desktop']}
          alt={product.name}
          width={150}
          height={150}
          className="md:w-full w-auto md:h-auto h-44 rounded-lg"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
            '<svg width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#F1F1F1"/></svg>'
          ).toString('base64')}`}
        />
      </div>
      <div
        className={`w-full flex flex-col items-center md:items-start md:w-1/2 md:text-left text-center ${textAlignmentClass}`}
      >
        {product.new && (
          <p className="font-normal text-base leading-6 tracking-widest uppercase text-primary-300 mb-5">
            New Product
          </p>
        )}
        <h2 className="font-bold text-4xl leading-11 tracking-wider text-black uppercase mb-5">
          {product.name}
        </h2>
        <p className="font-medium text-base leading-6 text-black opacity-50 mb-4">
          {product.description}
        </p>
        <Cta path={`/products/${product.slug}`}>See Product</Cta>
      </div>
    </div>
  );
}
