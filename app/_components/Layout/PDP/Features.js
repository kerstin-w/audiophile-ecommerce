import { transformProductData } from '@/app/_lib/data-service';

function Features({ product }) {
  const boxItems = transformProductData(product);

  return (
    <div className="flex lg:flex-row flex-col mt-10">
      <div className="lg:w-2/3 w-full lg:mb-0 md:mb-24 mb-12">
        <h2 className="text-3xl font-bold mb-5 uppercase">Features</h2>
        <p className="font-medium text-base leading-6 text-black opacity-50">
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you're taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you'll
          never miss a beat.
          <p>&nbsp;</p>
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </p>
      </div>
      <div className="lg:pl-24 flex lg:flex-col md:flex-row flex-col">
        <h2 className="text-3xl font-bold mb-5 uppercase lg:w-full md:w-1/2 w-full">
          In the Box
        </h2>
        <ul className="space-y-2 lg:w-full md:w-1/2 w-full">
          {boxItems.map((item, index) => (
            <li key={index} className="flex items-center pb-1">
              <span className="text-primary-300 font-bold mr-4">
                {item.quantity}x
              </span>
              <span className="text-gray-500">{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Features;
