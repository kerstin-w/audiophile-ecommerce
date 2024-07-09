import Image from 'next/image';
import { transformGalleryData } from '@/app/_lib/data-service';

function ImageGallery({ product }) {
  const images = transformGalleryData(product);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:mt-24 mt-14">
      <div className="grid grid-cols-1 gap-5">
        {images.slice(1).map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={500}
            height={300}
            className="object-cover w-full lg:h-full h-[250px] rounded-lg"
          />
        ))}
      </div>
      {images.length > 0 && (
        <div className="md:col-span-2" key={product.id}>
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={500}
            height={300}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
