'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import {
  getCart,
  saveCart,
  clearCart,
  isCartExpired,
  updateCartTimestamp,
} from '../_lib/cartStorage';

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (isCartExpired()) {
      clearCart();
    } else {
      setCart(getCart());
      updateCartTimestamp();
    }
  }, []);

  const addItem = (item, quantity) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (index >= 0) {
      updatedCart[index].quantity += quantity;
    } else {
      updatedCart.push({ ...item, quantity });
    }

    setCart(updatedCart);
    saveCart(updatedCart);
    updateCartTimestamp();
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    saveCart(updatedCart);
    updateCartTimestamp();
  };

  const clearCartItems = () => {
    setCart([]);
    clearCart();
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const updateItemQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCartItems,
        getTotalQuantity,
        updateItemQuantity,
        getCartTotal,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
