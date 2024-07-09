import { getProduct } from '@/app/_lib/data-service';
import Image from 'next/image';

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.slug);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <Image
        src={product['image/desktop']}
        alt={product.name}
        fill
        className="w-full"
      />
      <p className="mt-4">{product.description}</p>
      <ul>
        {product.features.split('\n').map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-4">Includes:</h2>

      <p className="text-3xl font-bold mt-4">${product.price}</p>
    </div>
  );
}
