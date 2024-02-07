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
        <Link href="/products"
            className="text-emerald-700 hover:text-emerald-400 text-white font-bold focus:outline-none focus:shadow-outline transition duration-300 ml-4"
          >
            Products
          </Link>
          <Link href="/wishlist"
            className="text-emerald-700 hover:text-emerald-400 text-white font-bold focus:outline-none focus:shadow-outline transition duration-300 ml-4"
          >
            Wishlist
          </Link>
          <Link href="/about">
            <div className="text-emerald-700 hover:text-emerald-400 text-white font-bold focus:outline-none focus:shadow-outline transition duration-300 ml-4"> {/* Gunakan tautan a */}
              About
            </div>
          </Link>
          <Link href="/login">
            <div className="text-red-500 hover:text-emerald-400 text-white font-bold focus:outline-none focus:shadow-outline transition duration-300 ml-4">
              Logout
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
