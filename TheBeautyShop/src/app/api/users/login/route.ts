import { NextRequest, NextResponse } from "next/server";
import UsersModel from "@/db/models/users";
import { generateAccessToken } from "@/db/helpers/jwt";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    const finduser = await UsersModel.findUserbyUsername(username);
    if (!finduser) {
      throw new Error("Invalid Email/Password");
    }
    const secret = process.env.JWT_SECRET as string;
    const access_token = await generateAccessToken({ _id: finduser._id, username: finduser.username }, secret);

    return NextResponse.json({
      message: "Login success",
      access_token: access_token,
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "Invalid Email/Password") {
        return NextResponse.json(
          {
            error: error.message,
          },
          {
            status: 400,
          }
        );
      }
    }
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
