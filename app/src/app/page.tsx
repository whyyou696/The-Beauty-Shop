import CarouselHome from "@/components/CarouselHome";
import Footer from "@/components/Footer";
import NavbarLink from "@/components/NavbarLink";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import getProducts from "@/middlewares/products";
import HeroSection from "@/components/HeroSection"; // Import komponen ImageGallery

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
        <div className="container mx-auto flex mt-20">
          <div className="flex items-center justify-center min-h-screen bg-white via-emerald-200 to-emerald-100">
            <div className="w-1/2 p-8 bg-white">
              <h1 className="text-3xl font-bold mb-4 text-emerald-700">
                About Us
              </h1>
              <p className="text-lg mb-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eleifend mi sit amet magna posuere, vel fermentum felis lacinia.
                Donec vel arcu eget tortor dictum maximus.
              </p>
              <p className="text-lg mb-4 text-gray-600">
                Integer nec velit et elit sodales laoreet. Proin fringilla ex
                quis justo consequat, sed convallis elit vestibulum.
              </p>
              <p className="text-lg mb-4 text-gray-600">
                Nam bibendum eros vel ex tincidunt, vel placerat quam eleifend.
                In hac habitasse platea dictumst.
              </p>
              <div className="mt-28">
                <Link href="/about">
                  <div className="bg-emerald-700 hover:bg-white hover:text-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                    See About Us.
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-1/2 pl-8 border-l border-emerald-500">
              {/* Gambar di sini */}
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Us"
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>
        </div>
        <HeroSection />
      </div>
      <div className="bg-white p-6">
        <Footer />
      </div>
    </>
  );
}
