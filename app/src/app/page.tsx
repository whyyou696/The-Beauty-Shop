import CarouselHome from "@/components/CarouselHome";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import getProducts from "@/middlewares/products";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NavbarLink from "@/components/NavbarLink";
import Footer from "@/components/Footer";

export default async function Home() {
  const products = await getProducts();
  const limitedProducts = products.slice(0, 4);
  return (
    <>
      <div className="bg-white">
        <NavbarLink />
        <CarouselHome />
        <div className="flex justify-between items-center mt-4 mx-4">
          <h2 className="text-xl font-semibold text-emerald-700">
            Featured Products
          </h2>
          <Link href="/products">
            <div className="bg-emerald-700 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300">
              See All Products
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {limitedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <AboutSection/>
        <HeroSection />
      </div>
      <div className="bg-white p-6">
      </div>
      <Footer/>
    </>
  );
}
