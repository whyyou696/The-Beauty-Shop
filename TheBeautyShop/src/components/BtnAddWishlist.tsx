'use client';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { FaShoppingCart } from 'react-icons/fa';
import ProductsType from '@/app/types/interface';

export default function BtnAddToWishlist({ productById }: { productById: ProductsType }) {
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false);

  const addToWishlist = async () => {
    const authorizationToken = Cookies.get('Authorization');

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/wishlist', {
        method: 'POST',
        headers: {
          Cookie: `Authorization=${authorizationToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: productById._id }), // Mengirim product id ke server
      });

      if (!response.ok) {
        throw new Error('Failed to add item to wishlist');
      }

      // Item berhasil ditambahkan, tampilkan pesan sukses
      Swal.fire({
        icon: 'success',
        title: 'Added to wishlist',
        text: 'Item added to wishlist',
      });
      setIsInWishlist(true);
    } catch (error) {
      // Tangani kesalahan saat menambahkan item ke wishlist
      Swal.fire({
        icon: 'error',
        title: 'Failed to add to wishlist',
        text: 'Please try again later',
      });
      console.error('Error adding item to wishlist:', error);
    }
  };

  return (
    <button
      className={`mt-4 flex items-center text-red-500 hover:text-red-700 focus:outline-none ${isInWishlist ? 'text-red-700' : ''}`}
      onClick={addToWishlist}
      disabled={isInWishlist}
    >
      <FaShoppingCart className="mr-2" />
      {isInWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
    </button>
  );
}
