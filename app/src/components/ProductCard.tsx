import { FaShoppingCart } from "react-icons/fa";

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

const ProductCard = ({ product }: { product: Products }) => {
  return (
    <div className="product-card bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
      <img
        src={product.thumbnail}
        alt={product.name}
        className="product-thumbnail w-full h-100 object-cover"
      />
      <div className="product-details p-4 flex flex-col justify-content">
        <h2 className="product-name text-lg font-semibold text-emerald-400 mb-2">{product.name}</h2>
        <p className="product-excerpt text-sm text-gray-600 mb-4">{product.excerpt}</p>
        <p className="product-price text-emerald-400 font-semibold mb-2">Rp.{product.price}</p>
        <div className="text-center">
          <button className="add-to-cart-btn bg-emerald-700 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300 flex items-center justify-center">
            <FaShoppingCart className="mr-2" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
