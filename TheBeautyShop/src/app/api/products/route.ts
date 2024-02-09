import Products from "@/db/models/products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const products = await Products.getAll();
    return NextResponse.json(products);
}
