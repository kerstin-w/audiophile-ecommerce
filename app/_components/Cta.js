import Link from 'next/link';

function Cta({ children, path }) {
  return (
    <Link href={path}>
      <p className="inset-0 bg-primary-300 text-white transform -translate-y-1/2 uppercase font-bold text-[13px] leading-[18px] tracking-[1px] transition-colors duration-300 hover:bg-accent-300 w-fit px-7 py-3">
        {children}
      </p>
    </Link>
  );
}

export default Cta;
