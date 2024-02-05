import Link from 'next/link';
import Image from 'next/image'; // Import Image dari Next.js untuk optimalisasi gambar
import logo from '@/assets/logo2.png'; // Gunakan path relatif dari folder public

export default function NavbarLink () {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 mt-8 mb-8">
              {/* Gunakan komponen Image dari Next.js untuk mengoptimalkan gambar */}
              <Image src={logo} alt="Logo" width={100} height={100} />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
