import Link from 'next/link';

function CtaTransparent({ children, path }) {
  return (
    <Link href={path}>
      <p className="inset-0 border-black border-solid border text-black transform -translate-y-1/2 uppercase font-bold text-[13px] leading-[18px] tracking-[1px] transition-colors duration-300 hover:bg-black hover:text-white w-fit px-7 py-3 mt-8">
        {children}
      </p>
    </Link>
  );
}

export default CtaTransparent;
