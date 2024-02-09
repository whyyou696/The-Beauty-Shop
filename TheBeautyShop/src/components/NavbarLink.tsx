import Image from 'next/image';
import Link from 'next/link';
import logo3 from '@/assets/logo3.png';
import { FaShoppingBag, FaShoppingCart, FaInfoCircle, FaUserAlt } from 'react-icons/fa';

export default function NavbarLink () {
  return (
    <nav className="bg-emerald-700 p-4 fixed w-full top-0 shadow-xl z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="items-center">
          <Link href="/">
            <Image src={logo3} alt="Logo" className="w-20 h-20" />
          </Link>
        </div>
        <Link href="/products"
          className="text-emerald-700 hover:text-emerald-400 text-white font-bold focus:outline-none focus:shadow-outline transition duration-300 ml-4"
        >
          <FaShoppingBag className="inline-block mr-2" /> Products
        </Link>
        <Link href="/wishlist"
          className="text-emerald-700 hover:text-emerald-400 text-white font-bold focus:outline-none focus:shadow-outline transition duration-300 ml-4"
        >
          <FaShoppingCart className="inline-block mr-2" /> Wishlist
        </Link>
        <Link href="/about">
          <div className="text-emerald-700 hover:text-emerald-400 text-white font-bold focus:outline-none focus:shadow-outline transition duration-300 ml-4">
            <FaInfoCircle className="inline-block mr-2" /> About
          </div>
        </Link>
        <Link href="/login">
          <div className="text-white hover:text-white hover:bg-red-700 font-bold focus:outline-none focus:shadow-outline transition duration-300 ml-4 py-3 px-3 rounded bg-red-500">
            <FaUserAlt className="inline-block mr-2" /> Logout
          </div>
        </Link>
      </div>
    </nav>
  );
}
