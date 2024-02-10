import { ObjectId } from "mongodb";
export type User = {
    _id: ObjectId;
    name: string;
    username: string;
    email: string;
    password: string;
  };
export type NewUser = Omit <User, "_id">
export type Response<T> = {
    message?: string;
    error?: string;
    data?: T | null | undefined;
  };

  export type Product = {
    _id: ObjectId;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: Date;
    updatedAt: Date;
  };
  
  export type Wishlist = {
    _id: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
    productResult: Product;
    userResult: User;
  };

 
  export type MakeWishlist = Omit<Wishlist, "_id">;