import Link from 'next/link';
import Image from 'next/image'; // Import Image dari Next.js untuk optimalisasi gambar
import logo from '@/assets/logo1.png'; // Gunakan path relatif dari folder public
import logo2 from "@/assets/logo2.png"

export default function NavbarLink () {
  return (
    <nav className="bg-gradient-to-r from-white to-emerald-200 p-4 fixed w-full top-0 shadow-xl z-10"> {/* Penambahan z-10 */}
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" className="w-20 h-20" />
      </div>
      <div className="items-center">
        <Image src={logo2} alt="Logo" className="w-20 h-20" />
      </div>
      <div className="flex items-center">
        <Link href="/wishlist"
          className="bg-emerald-700 hover:bg-white hover:text-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Wishlist
        </Link>

        <button
          className="bg-emerald-700 hover:bg-white hover:text-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ml-4"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
);
};
