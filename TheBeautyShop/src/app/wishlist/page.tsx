'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Wishlist } from '../types/type';
import CardWishlist from '@/components/CardWishlist';

export default function Wishlist() {
  const [data, setData] = useState<Wishlist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const auth_wishlist_token = Cookies.get('Authorization')
      console.log(auth_wishlist_token, "<<<<< auth_wishlist_token");
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/wishlist`, {
          method: 'GET',
          headers: {
            Cookie: `Authorization=${auth_wishlist_token}`,
          },
          cache: 'no-store',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const newData: { data: Wishlist[] } = await response.json();
        setData(newData.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(data)
  return (
    <>
      <div className="bg-white p-6">
      <h2 className="text-8xl font-bold mt-28 text-center text-emerald-700">Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 p-4 mx-20">
        {loading ? <p>Loading...</p> : error ? <p>{error}</p> : data.map((wishlist) => <CardWishlist key={wishlist.productResult.slug} wishlist={wishlist} />)}
      </div>
      </div>
    </>
  );
}
