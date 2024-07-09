import { transformFeaturedProducts } from '@/app/_lib/data-service';
import Image from 'next/image';
import Cta from '../../Cta';

function Recommendations({ product }) {
  const featured = transformFeaturedProducts(product);
  return (
    <section className="md:mb-24 mb-14 md:mt-24 mt-14">
      <h2 className="text-3xl font-bold text-center mb-16 uppercase">
        you may also like
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        {featured.map((product) => (
          <div key={product.images}>
            <div className="w-full h-64 relative">
              <Image
                src={product.images.desktop}
                alt={product.name}
                fill
                className="object-cover hidden md:block lg:block rounded-lg"
              />
              <Image
                src={product.images.tablet}
                alt={product.name}
                fill
                className="object-cover hidden md:block lg:hidden rounded-lg"
              />
              <Image
                src={product.images.mobile}
                alt={product.name}
                fill
                className="object-cover block md:hidden lg:hidden rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center mb-14 md:mb-0">
              <h3 className="font-bold text-lg text-center my-8 uppercase">
                {product.name}
              </h3>
              <Cta path={`/products/${product.slug}`}>See Product</Cta>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recommendations;
