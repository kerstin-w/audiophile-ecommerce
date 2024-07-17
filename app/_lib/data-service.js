import { notFound } from 'next/navigation';
import { supabase } from './supabase';

export async function getProduct(identifier) {
  let query;
  if (typeof identifier === 'number') {
    query = supabase.from('products').select('*').eq('id', identifier).single();
  } else if (typeof identifier === 'string') {
    query = supabase.from('products').select('*').eq('slug', identifier).single();
  } else {
    throw new Error('Invalid identifier type');
  }

  const { data: product } = await query;
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

export function transformProductData(data) {
  const items = [];
  let index = 0;

  while (
    data[`includes/${index}/quantity`] !== undefined &&
    data[`includes/${index}/item`] !== undefined
  ) {
    items.push({
      quantity: data[`includes/${index}/quantity`],
      description: data[`includes/${index}/item`],
    });
    index++;
  }

  return items;
}

export function transformGalleryData(data) {
  const images = [];

  if (data['gallery/first/desktop']) {
    images.push({ src: data['gallery/first/desktop'], alt: 'Image 1' });
  }
  if (data['gallery/second/desktop']) {
    images.push({ src: data['gallery/second/desktop'], alt: 'Image 2' });
  }
  if (data['gallery/third/desktop']) {
    images.push({ src: data['gallery/third/desktop'], alt: 'Image 3' });
  }

  return images;
}

export function transformFeaturedProducts(data) {
  const featuredProducts = [];

  for (let i = 0; data[`others/${i}/slug`]; i++) {
    featuredProducts.push({
      slug: data[`others/${i}/slug`],
      name: data[`others/${i}/name`],
      images: {
        desktop: data[`others/${i}/image/desktop`],
        tablet: data[`others/${i}/image/tablet`],
        mobile: data[`others/${i}/image/mobile`],
      },
    });
  }

  return featuredProducts;
}
