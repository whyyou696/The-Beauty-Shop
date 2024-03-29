"use client";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import ProductsType from "@/app/types/interface";
import BtnAddToWishlist from "./BtnAddWishlist";

const ProductCard = ({ product }: { product: ProductsType }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <div className="product-card bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
      <img
        src={product.thumbnail}
        alt={product.name}
        className="product-thumbnail w-full h-100 object-cover"
      />
      <div className="product-details p-4 flex flex-col justify-content">
        <h2 className="product-name text-lg font-semibold text-emerald-400">
          {product.name}
        </h2>
        <p className="product-excerpt text-sm text-gray-600 mb-4">
          {product.excerpt}
        </p>
        <p className="product-price text-emerald-400 font-semibold mb-2">
          {formatPrice(product.price)}
        </p>
        <div className="flex justify-between mb-2">
          <Link href={`/products/${product.slug}`}>
            <button className="see-details-btn bg-emerald-700 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300 flex items-center justify-center">
              <FaInfoCircle className="mr-2" />
              <span>See Details</span>
            </button>
          </Link>
          <BtnAddToWishlist productById={product}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
