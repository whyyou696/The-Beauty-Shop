
import { MakeWishlist, Response, Wishlist } from "@/app/types/type";
import WishlistModel from "@/db/models/wishlists";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const userId = request.headers.get("userId");
  const data = await WishlistModel.findWishlistByUserId(userId);
  return NextResponse.json<Response<Wishlist[]>>({ data });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userId = request.headers.get("userId");
    await WishlistModel.wishlistCreate(userId, body.productId);
    return NextResponse.json<Response<MakeWishlist>>({ message: "success" });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "Already added this product") {
        return NextResponse.json<Response<MakeWishlist>>(
          {
            error: "Already added this product",
          },
          {
            status: 400,
          }
        );
      }
    }
    return NextResponse.json<Response<MakeWishlist>>(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const userId = request.headers.get("userId");
    const body = await request.json();

    const deletedCount = await WishlistModel.deleteWishlist(userId, body.productId);

    if (deletedCount > 0) {
      return NextResponse.json<Response<MakeWishlist>>({ message: "Deleted Wishlist Product" });
    } else {
      return NextResponse.json<Response<MakeWishlist>>({ message: "Wishlist Product not found" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json<Response<MakeWishlist>>(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
