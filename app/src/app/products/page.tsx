'use client';
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import getProducts from "@/middlewares/products";
import ProductsType from "@/app/model/product";
import NavbarLink from "@/components/NavbarLink";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<ProductsType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [startIndex, setStartIndex] = useState<number>(0);
  
  const productsPerPage = 4;

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    setDisplayedProducts(products.slice(0, startIndex + productsPerPage));
  }, [products, startIndex]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setStartIndex(0);
  };

  const loadMore = () => {
    setStartIndex((prevIndex) => prevIndex + productsPerPage);
  };

  const filteredProducts = displayedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const previousProducts = products.slice(0, startIndex);

  return (
    <>
      <NavbarLink />
      <div className="bg-white object-center mt-28">
        <h1 className="text-6xl font-bold mb-4 text-emerald-700 text-center">Products</h1>
        <p className="text-lg mb-4 text-gray-600 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend mi sit amet magna posuere, vel fermentum felis lacinia. Donec vel arcu eget tortor dictum maximus.
        </p>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 px-4 py-2 rounded-md"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {startIndex > 0 && (
          <div className="flex justify-center mt-4">
            <button
              className="bg-emerald-700 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
              onClick={() => setStartIndex(0)}
            >
              Show Previous
            </button>
          </div>
        )}
        {startIndex + productsPerPage < products.length && (
          <div className="flex justify-center mt-4">
            <button
              className="bg-emerald-700 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
              onClick={loadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
