'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';

interface Products {
  id: string;
  name: string;
  price: number;
  thumbnail: string;
  excerpt: string;
  description: string;
  slug: string;
  tags: string[];
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

const Wishlist = () => {
  // Simulate wishlist data
  const [wishlist, setWishlist] = useState<Products[]>([]);

  // Function to remove product from wishlist
  const removeFromWishlist = (productId: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((product) => product.id !== productId));
  };

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-products">
          {wishlist.map((product) => (
            <div key={product.id} className="wishlist-product">
              <ProductCard product={product} />
              <button onClick={() => removeFromWishlist(product.id)} className="remove-from-wishlist-btn">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
