"use client";
import { Wishlist } from "@/app/types/type";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export default function BtnRemoveWishlist({ wishlist }: { wishlist: Wishlist }) {
  const removeWishlist = async () => {
    const authorization_token = Cookies.get("Authorization");
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/wishlist`, {
        method: "DELETE",
        headers: {
          Cookie: `Authorization=${authorization_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: wishlist.productId }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove item from wishlist");
      }

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF3333",
        cancelButtonColor: "#000000",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          window.location.reload();
        }
      });
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };
  return (
    <button className="text-emerald-500 hover:text-emerald-700 focus:outline-none" onClick={removeWishlist}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
}
