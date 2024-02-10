'use client';
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import LoaderProducts from "./loader";
import ProductsType from "@/app/types/interface";

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<ProductsType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const productsPerPage = 4;

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts =await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/products", {
        cache: "no-store"
      })
      const products = await fetchedProducts.json() as ProductsType[];
      setProducts([...products]);
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

  const loadMore = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStartIndex(prevIndex => prevIndex + productsPerPage);
    setIsLoading(false);
  };

  const filteredProducts = displayedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="bg-white object-center mt-28">
        <h1 className="text-8xl font-bold mb-4 text-emerald-700 text-center">Products</h1>
        <p className="text-lg mb-4 text-gray-600 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend mi sit amet magna posuere, vel fermentum felis lacinia. Donec vel arcu eget tortor dictum maximus.
        </p>
        <div className="flex justify-center mb-10 mt-10">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 rounded-md w-1/2 justify-center text-white focus:outline-none focus:ring-2 focus:ring-emerald-700 transition duration-300"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        {startIndex + productsPerPage < products.length && (
          <div className="flex justify-center mt-4">
            {isLoading ? (
              <LoaderProducts />
            ) : (
              <button
                className="bg-emerald-700 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
                onClick={loadMore}
              >
                Load More
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
