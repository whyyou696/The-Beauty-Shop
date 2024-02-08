import ProductsType from "@/app/types/product";

export default async function getProducts(): Promise<ProductsType[]> {
    const response = await fetch("http://localhost:3001/products", {
      cache: "no-store",
    }) ;
    return response.json();
}

export async function getDetails(slug: string): Promise<ProductsType[]> {
  const response = await fetch(`http://localhost:3001/products?slug=${slug}`);
  return response.json();
}


