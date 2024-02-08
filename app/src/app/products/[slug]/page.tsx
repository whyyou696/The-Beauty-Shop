import { getDetails } from "@/models/products";
import Head from 'next/head';
import type { Metadata, ResolvingMetadata } from 'next';

type ProductsType = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: ProductsType,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const productData = await getDetails(slug);
  const product = productData[0];

  return {
    title: product.name + " || TheBeautyShop®"
  };
}

async function DetailPage({ params }: { params: { slug: string } }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const productData = await getDetails(params.slug);
  const data = productData[0];

  return (
    <div className="bg-white">
      <Head>
        <title>{`TheBeautyShop® ${data.name}`}</title>
      </Head>
      <div className="container mx-auto mt-28">
        <h1 className="text-3xl font-bold text-center text-emerald-700">
          {data.name}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Image ${index}`}
              className="w-full h-auto"
            />
          ))}
        </div>
        <p className="text-gray-600 mt-4">{data.description}</p>
        <p className="text-emerald-400 font-semibold mt-2">
          {formatPrice(data.price)}
        </p>
      </div>
    </div>
  );
}
export default DetailPage;
