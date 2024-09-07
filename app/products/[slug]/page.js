import { Suspense } from 'react';
import Image from 'next/image';
import BackButton from '@/app/_components/BackButton';
import AudiogearCallout from '@/app/_components/Home/AudiogearCallout';
import CategoryCallout from '@/app/_components/Home/CategoryCallout';
import Features from '@/app/_components/Layout/PDP/Features';
import ImageGallery from '@/app/_components/Layout/PDP/ImageGallery';
import QuantitySelector from '@/app/_components/Layout/PDP/Quantityselector';
import Recommendations from '@/app/_components/Layout/PDP/Recommendations';
import { getProduct, getProducts } from '@/app/_lib/data-service';
import Spinner from '@/app/_components/Spinner';

export async function generateMetadata({ params }) {
  const { name } = await getProduct(params.slug);
  return {
    title: `${name} | audiophile`,
    description: `Details for ${name}`,
  };
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: String(product.id) }));
}

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.slug);

  return (
    <div className="xl:mx-36 md:mx-24 mx-12">
      <BackButton />
      <Suspense fallback={<Spinner />}>
        <ProductDetails product={product} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Features product={product} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ImageGallery product={product} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Recommendations product={product} />
      </Suspense>
      <CategoryCallout />
      <AudiogearCallout />
    </div>
  );
}

function ProductDetails({ product }) {
  return (
    <div className="flex md:flex-row flex-col items-center md:mb-24 mb-14">
      <div className="w-full lg:w-1/2 md:w-1/3 lg:h-full md:h-[500px] h-full mb-8 md:mb-0 flex justify-center items-center bg-primary-100 rounded-lg">
        <Image
          src={product['image/desktop']}
          alt={product.name}
          width={150}
          height={150}
          className="md:w-full w-auto md:h-1/2 rounded-lg"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
            '<svg width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#F1F1F1"/></svg>'
          ).toString('base64')}`}
        />
      </div>
      <div className="w-full flex flex-col md:w-2/3 md:text-left lg:pl-24 md:pl-16">
        {product.new && (
          <p className="font-normal text-base leading-6 tracking-widest uppercase text-primary-300 mb-5">
            New Product
          </p>
        )}
        <h2 className="font-bold text-4xl leading-11 tracking-wider text-black uppercase mb-5">
          {product.name}
        </h2>
        <p className="font-medium text-base leading-6 text-black opacity-50 mb-5">
          {product.description}
        </p>
        <p className="font-bold text-xl leading-tight text-black letter-spacing-1 tracking-wider mb-5">
          $ {product.price.toLocaleString()}
        </p>
        <QuantitySelector product={product} />
      </div>
    </div>
  );
}
