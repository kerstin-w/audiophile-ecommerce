export const getCart = () => {
  if (typeof window !== 'undefined') {
    const cart = localStorage.getItem('shoppingCart');
    if (cart) {
      return JSON.parse(cart);
    }
  }
  return [];
};

export const saveCart = (cart) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
};

export const clearCart = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('shoppingCart');
  }
};

export const isCartExpired = () => {
  if (typeof window !== 'undefined') {
    const timestamp = localStorage.getItem('cartTimestamp');
    if (timestamp) {
      const now = new Date().getTime();
      const expirationTime = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
      return now - parseInt(timestamp, 10) > expirationTime;
    }
  }
  return false;
};

export const updateCartTimestamp = () => {
  if (typeof window !== 'undefined') {
    const now = new Date().getTime();
    localStorage.setItem('cartTimestamp', now.toString());
  }
};
