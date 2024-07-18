import Link from 'next/link';

function Cta({ children, path, fullWidth }) {
  const baseClasses =
    'inset-0 bg-primary-300 text-white transform uppercase font-bold text-[13px] leading-[18px] tracking-[1px] transition-colors duration-300 hover:bg-accent-300 text-center';
  const classes = fullWidth
    ? `${baseClasses} w-full px-7 py-4`
    : `${baseClasses} w-fit px-7 py-3`;

  return (
    <Link href={path}>
      <p className={classes}>{children}</p>
    </Link>
  );
}

export default Cta;
