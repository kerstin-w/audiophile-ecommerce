import { notFound } from 'next/navigation';
import { supabase } from './supabase';

export async function getProduct(slug) {
  const { data: product } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single();

  return product;
}

export async function getProducts() {
  const { data: products, error } = await supabase.from('products').select('*');
  if (error) {
    console.error(error);
    notFound();
  }
  return products;
}

export async function getCategoryProducts(category) {
  const products = await getProducts();
  return products
    .filter((product) => product.category === category)
    .sort((a, b) => {
      if (a.new && !b.new) return -1;
      if (!a.new && b.new) return 1;
      return 0;
    });
}
