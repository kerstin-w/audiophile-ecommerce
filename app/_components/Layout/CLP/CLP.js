import Image from 'next/image';
import Cta from '../../Cta';
import CategoryCallout from '../../Home/CategoryCallout';
import AudiogearCallout from '../../Home/AudiogearCallout';

function CLP({ category }) {
  return (
    <div className="xl:mx-36 md:mx-24 mx-12 my-24">
      {category.map((product, index) => (
        <div
          key={product.id}
          className={`flex flex-col ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } items-center md:mb-24 mb-14 `}
        >
          <div
            className={`w-full md:w-1/2 h-44 md:h-auto mb-8 md:mb-0 flex justify-center bg-primary-100 rounded-lg ${
              index % 2 === 0 ? '' : 'md:pl-8'
            }`}
          >
            <Image
              src={product['image/desktop']}
              alt={product.name}
              width={150}
              height={150}
              className="md:w-full w-auto md:h-auto h-44 rounded-lg"
            />
          </div>
          <div
            className={`w-full flex flex-col items-center md:items-start md:w-1/2 md:text-left text-center ${
              index % 2 === 0 ? 'lg:pl-24 md:pl-16' : 'lg:pr-24 md:pr-16'
            }`}
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
            <Cta path={`/headphones/${product.slug}`}>See Product</Cta>
          </div>
        </div>
      ))}
      <CategoryCallout />
      <AudiogearCallout />
    </div>
  );
}

export default CLP;
