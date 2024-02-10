
import { ObjectId } from "mongodb";
import { Wishlist } from "@/app/types/type";
import { database } from "../config/mongodb";

class WishlistModel {
  static getCollection() {
    return database.collection("wishlists");
}

  static async wishlistCreate(userId: any, productId: string) {
    const agg = [
      {
        $match: {
          productId: new ObjectId(productId),
        },
      },
      {
        $match: {
          userId: new ObjectId(userId),
        },
      },
    ];
    const findWishlist = await this.getCollection().aggregate(agg).toArray();

    if (findWishlist.length === 0) {
      return await this.getCollection().insertOne({
        userId: new ObjectId(userId),
        productId: new ObjectId(productId),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    } else {
      throw new Error("Already in wishlist");
    }
  }
  static async findWishlistByUserId(userId: any) {
    const agg = [
      {
        '$match': {
          'userId': new ObjectId(userId)
        }
      }, {
        '$lookup': {
          'from': 'users', 
          'localField': 'userId', 
          'foreignField': '_id', 
          'as': 'userResult'
        }
      }, {
        '$project': {
          'password': 0
        }
      }, {
        '$lookup': {
          'from': 'products', 
          'localField': 'productId', 
          'foreignField': '_id', 
          'as': 'productResult'
        }
      }, {
        '$unwind': {
          'path': '$userResult', 
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$unwind': {
          'path': '$productResult', 
          'preserveNullAndEmptyArrays': true
        }
      }
    ];
    return (await this.getCollection().aggregate(agg).toArray()) as Wishlist[];
  }

  static async deleteWishlist(userId: any, productId: string) {
      const deleteResult = await this.getCollection().deleteOne({
        userId: new ObjectId(userId),
        productId: new ObjectId(productId),
      })

      return deleteResult.deletedCount || 0;
  }
}

export default WishlistModel;