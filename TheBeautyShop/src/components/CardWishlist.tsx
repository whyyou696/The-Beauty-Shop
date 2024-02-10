import { Wishlist } from "@/app/types/type";
import Link from 'next/link';
import BtnRemoveWishlist from "./BtnRemoveWishlist";

export default function CardWishlist({ wishlist }: { wishlist: Wishlist}) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <div className="bg-white p-6">
      <div className="product-card rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center justify-between my-2 mx-2 p-2 bg-white">
        <div className="flex items-center space-x-6 md:w-1/2">
          <img src={wishlist.productResult.thumbnail} alt="#" className="w-400 h-400 md:w-600 md:h-600 object-cover rounded-md" />
          <div className="text-left space-y-4 md:w-1/2">
            <Link href={`products/${wishlist.productResult.slug}`}>
              <p className="font-semibold text-emerald-700 mb-2">{wishlist.productResult.name}</p>
            </Link>
            <p className="text-sm text-gray-600">{formatPrice(wishlist.productResult.price)}</p>
          </div>
        </div>
        <div className="flex items-center justify-end md:w-1/2">
          <BtnRemoveWishlist wishlist={wishlist} />
        </div>
      </div>
    </div>
  );
}
