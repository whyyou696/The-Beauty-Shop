'use client';
import Footer from "@/components/footer/page";
import NavbarLink from "@/components/navbar/page";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
  const [wishlist, setWishlist] = useState<Products[]>([]);

  useEffect(() => {
    const existingWishlist = localStorage.getItem("wishlist");
    if (existingWishlist) {
      setWishlist(JSON.parse(existingWishlist));
    }
  }, []);

  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((product) => product.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <>
      <NavbarLink/>
      <div className="bg-white flex flex-col items-center justify-center min-h-screen mt-28">
        <h1 className="text-3xl font-bold mb-4 text-emerald-700">Wishlist</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                className="w-full h-100"
                navigation
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-emerald-400 mb-2">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{product.excerpt}</p>
                <p className="text-emerald-400 font-semibold mb-2">Rp.{product.price}</p>
                <button 
                  onClick={() => removeFromWishlist(product.id)}
                  className="bg-emerald-700 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Wishlist;
