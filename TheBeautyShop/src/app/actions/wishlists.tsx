"use server";

import { cookies } from "next/headers";

export const auth_wishlist_token = cookies().get("Authorization");