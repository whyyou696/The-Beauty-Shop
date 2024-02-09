import { z } from "zod";
import { database } from "@/db/config/mongodb";

import { NewUser } from "@/app/types/type";
import { hashPassword } from "../helpers/bcrypt";

export const Users = z.object({
    name: z.string(),
    username: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(5, { message: "Password must be at least 5 characters" }),
});

class UsersModel {
    static getCollection() {
        return database.collection("users");
    }

    static async Register(newUser: NewUser) {
        const parseResult = Users.safeParse(newUser);
        if (!parseResult.success) {
          console.log(parseResult.error);
          throw parseResult.error;
        }
        const userUnique = await this.getCollection().findOne({
          username: newUser.username,
        });
        if (userUnique) {
          throw new Error("Username already exists");
        }
        return await this.getCollection().insertOne({
          ...newUser,
          password: hashPassword(newUser.password),
        });
      }
}

export default UsersModel;
