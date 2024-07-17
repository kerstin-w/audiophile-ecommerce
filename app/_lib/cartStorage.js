import { supabase } from './supabase';

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

export async function createOrder(formData) {
  const cart = getCart();
  const newOrder = {
    customer_name: formData.get('name'),
    customer_email: formData.get('email'),
    customer_phone: formData.get('phone'),
    customer_address: formData.get('address'),
    customer_zip: formData.get('zip'),
    customer_city: formData.get('city'),
    customer_country: formData.get('country'),
    total: formData.get('total'),
  };

  const { data: createdOrder, error } = await supabase
    .from('orders')
    .insert([newOrder])
    .select()
    .single();

  if (error) throw new Error('Order could not be created');

  // Get the ID of the newly created order
  const orderId = createdOrder.id;

  // Insert order items with the correct order_id
  const orderItems = cart.map((item) => ({
    order_id: orderId,
    product_id: item.id,
    product_name: item.name,
    quantity: item.quantity,
    price: item.price,
  }));

  const { data: createdOrderItems, error: errorItems } = await supabase
    .from('order_items')
    .insert(orderItems)
    .select();

  if (errorItems) throw new Error('Order items could not be created');

  clearCart();

  return { createdOrder, createdOrderItems };
}
