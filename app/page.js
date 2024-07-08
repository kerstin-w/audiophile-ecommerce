import CategoryCallout from './_components/Header/CategoryCallout';
import ZX7Callout from './_components/Home/ZX7Callout';
import HeroBanner from './_components/Home/HeroBanner';
import ZX9Callout from './_components/Home/ZX9Callout';
import YX1Callout from './_components/Home/YX1Callout';

export default function Page() {
  return (
    <>
      <HeroBanner />
      <CategoryCallout />
      <ZX9Callout />
      <ZX7Callout />
      <YX1Callout />
    </>
  );
}
