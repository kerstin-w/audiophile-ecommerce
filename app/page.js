import CategoryCallout from './_components/Header/CategoryCallout';
import ZX7Callout from './_components/Header/ZX7Callout';
import HeroBanner from './_components/HeroBanner';
import ZX9Callout from './_components/ZX9Callout';

export default function Page() {
  return (
    <>
      <HeroBanner />
      <CategoryCallout />
      <ZX9Callout />
      <ZX7Callout />
    </>
  );
}
