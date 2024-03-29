import { NextResponse, NextRequest } from "next/server";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/wishlist")) {
    let cookie = request.cookies.get("Authorization");
    let token = cookie?.value.split(" ")[1] as string;

    const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);
    try {
      const verifiedData = await jose.jwtVerify<{ _id: string; username: string }>(token, secret);
      console.log(verifiedData);
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("userId", verifiedData.payload._id);
      requestHeaders.set("username", verifiedData.payload.username);
      const response = NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
      return response;
    } catch (error) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }
  }

  if (request.nextUrl.pathname.startsWith("/wishlist")) {
    let cookie = request.cookies.get("Authorization");
    let token = cookie?.value.split(" ")[1] as string;
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    {
      return NextResponse.next();
    }
  }

  const response = NextResponse.next();

  return response;
}
