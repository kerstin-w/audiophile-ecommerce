import Link from 'next/link';

function CtaBlack({ children, path }) {
  return (
    <Link href={path}>
      <p className="inset-0 bg-black text-white transform -translate-y-1/2 uppercase font-bold text-[13px] leading-[18px] tracking-[1px] transition-colors duration-300 hover:bg-gray-500 w-fit px-7 py-3 mt-8">
        {children}
      </p>
    </Link>
  );
}

export default CtaBlack;
