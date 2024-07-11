function BuyButton({ children, handleAddToCart }) {
  return (
    <button onClick={handleAddToCart}>
      <p className="inset-0 bg-primary-300 text-white transform uppercase font-bold text-[13px] leading-[18px] tracking-[1px] transition-colors duration-300 hover:bg-accent-300 w-fit px-7 py-3">
        {children}
      </p>
    </button>
  );
}

export default BuyButton;
