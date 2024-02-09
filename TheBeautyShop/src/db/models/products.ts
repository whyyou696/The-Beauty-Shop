
import ProductsType from "@/app/types/interface";
import { database } from "../config/mongodb";

export async function getProducts(): Promise<ProductsType[]> {
  return await Products.getAll();
}

class Products {
  static getCollection() {
    return database.collection("products");
  }

  static async getAll() {
    return (await this.getCollection().find().toArray()) as ProductsType[];
  }

 static async getDetails(slug: string) {
    const products = await Products.getCollection().find({ slug: slug }).toArray();
    return products as ProductsType | null
  }
}

export default Products;
