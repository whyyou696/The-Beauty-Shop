import Products from "@/db/models/products";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const products = await Products.getDetails(params.slug);
    return NextResponse.json(products);
}
