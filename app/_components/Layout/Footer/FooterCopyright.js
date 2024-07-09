const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <span className="text-opacity-40 font-semibold text-white tracking-wider mb-12">
      Copyright {currentYear}. All Rights Reserved
    </span>
  );
};

export default FooterCopyright;
