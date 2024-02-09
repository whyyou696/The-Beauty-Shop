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

