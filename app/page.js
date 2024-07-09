import CategoryCallout from './_components/Home/CategoryCallout';
import ZX7Callout from './_components/Home/ZX7Callout';
import HeroBanner from './_components/Home/HeroBanner';
import ZX9Callout from './_components/Home/ZX9Callout';
import YX1Callout from './_components/Home/YX1Callout';
import AudiogearCallout from './_components/Home/AudiogearCallout';

export default function Page() {
  return (
    <>
      <HeroBanner />
      <div className="xl:mx-36 md:mx-24 mx-12">
        <CategoryCallout />
        <ZX9Callout />
        <ZX7Callout />
        <YX1Callout />
        <AudiogearCallout />
      </div>
    </>
  );
}
