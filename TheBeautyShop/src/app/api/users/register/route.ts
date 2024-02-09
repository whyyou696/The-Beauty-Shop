import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import UsersModel from "@/db/models/users";
import { NewUser, Response } from "@/app/types/type";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await UsersModel.Register(body);
    return NextResponse.json<Response<NewUser>>({ message: "User Created Successfully", data: body }, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      const err = error.issues[0].message;
      return NextResponse.json<Response<NewUser>>(
        {
          error: err,
        },
        {
          status: 400,
        }
      );
    }
    if (error instanceof Error) {
      if (error.message === "Username has been taken") {
        return NextResponse.json(
          {
            error: "Username has been taken",
          },
          {
            status: 400,
          }
        );
      }
    }
    return NextResponse.json<Response<NewUser>>(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}