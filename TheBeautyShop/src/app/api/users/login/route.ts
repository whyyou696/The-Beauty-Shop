import { comparePassword } from "@/db/helpers/bcrypt";
import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import UsersModel from "@/db/models/users";
import { cookies } from "next/headers";
export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    const findUser = await UsersModel.findUserbyUsername(username);
    if (!findUser) {
      throw new Error("Invalid Email/Password");
    }

    const checkPassword = comparePassword(password, findUser.password);
    if (!checkPassword) {
      throw new Error("Invalid Email/Password");
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);
    const alg = "HS256";
    const access_token = await new jose.SignJWT({
      _id: findUser._id,
      username: findUser.username,
    })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .sign(secret);

      cookies().set('Authorization', `Bearer ${access_token}`);

    return NextResponse.json({
      message: "Login Sucess!",
      access_token: access_token,
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "Invalid Email/Password") {
        return NextResponse.json(
          {
            error: "Invalid Email/Password",
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