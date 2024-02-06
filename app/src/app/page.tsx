import CarouselHome from "@/components/CarouselHome";
import Footer from "@/components/Footer";
import NavbarLink from "@/components/NavbarLink";
import ProductCard from "@/components/ProductCard";

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

async function getProducts(): Promise<Products[]> {
  const response = await fetch("http://localhost:3001/products");
  return response.json();
}

export default async function Home() {
  const products = await getProducts();
  // console.log(products, "<<< getProducts");
  return (
    <>
      <div className="bg-white">
        <NavbarLink />
        <CarouselHome />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
      <div className="bg-white p-6">
        <Footer />
      </div>
    </>
  );
}
