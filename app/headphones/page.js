import { getCategoryProducts } from '../_lib/data-service';
import CLP from '../_components/Layout/CLP/CLP';

export const metadata = {
  title: 'Headphones | audiophile',
  description:
    'Shop Audiphile for premium headphones, earphones, and speakers. Enjoy top sound quality and great deals. Fast shipping available.',
};

export default async function HomePage() {
  const category = await getCategoryProducts('headphones');

  return <CLP category={category} />;
}
