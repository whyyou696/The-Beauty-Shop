'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
}

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  const fetchProduct = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/products/${id}`, {
        cache: 'no-store',
      });
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    if (id && typeof id === 'number') {
      fetchProduct(id);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center text-emerald-700">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Product Image ${index + 1}`} className="w-full h-auto" />
        ))}
      </div>
      <p className="text-gray-600 mt-4">{product.description}</p>
      <p className="text-emerald-400 font-semibold mt-2">Price: Rp.{product.price}</p>
    </div>
  );
};

export default DetailPage;
