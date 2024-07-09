import Image from 'next/image';
import Link from 'next/link';

import categories from '@/app/_data/categories';

function CategoryCallout() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8 my-[60px] md:my-[120px]">
      {categories.map((category) => (
        <div
          key={category.name}
          className="flex flex-col items-center bg-primary-100 rounded-lg relative mt-14 w-full shadow-lg"
        >
          <div className="w-[150px] lg:w-[180px] overflow-hidden absolute transform -translate-y-12 lg:-translate-y-16">
            <Image
              src={category.imageSrc}
              alt={category.name}
              width={200} // Adjust width as needed
              height={200} // Adjust height as needed
              className="object-contain"
            />
          </div>
          <h3 className="text-base lg:text-[18px] font-bold tracking-wide uppercase pt-20 lg:pt-28">
            {category.name}
          </h3>
          <Link
            href={category.link}
            className="flex flex-row justify-center items-center py-3"
          >
            <p className="text-xs font-semibold uppercase leading-10 tracking-tight opacity-50 mr-3 transition-colors duration-300 hover:text-primary-300 hover:opacity-100">
              Shop
            </p>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryCallout;
