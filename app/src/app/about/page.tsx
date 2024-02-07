import Footer from '@/components/Footer';
import NavbarLink from '@/components/NavbarLink';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
    <NavbarLink/>
    <div className="flex items-center justify-center min-h-screen via-emerald-200 to-emerald-100 mt-16 bg-gradient-to-r from-white to-emerald-200">
      <div className="container mx-auto flex">
        <div className="w-1/2 border-r border-white pr-8">
          {/* Gambar di sini */}
          <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us" className="w-full h-auto" />
        </div>
        <div className="w-1/2 p-8 bg-">
          <h1 className="text-3xl font-bold mb-4 text-emerald-700">About Us</h1>
          <p className="text-lg mb-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend mi sit amet magna posuere, vel fermentum felis lacinia. Donec vel arcu eget tortor dictum maximus.
          </p>
          <p className="text-lg mb-4 text-gray-600 text-white">
            Integer nec velit et elit sodales laoreet. Proin fringilla ex quis justo consequat, sed convallis elit vestibulum.
          </p>
          <p className="text-lg mb-4 text-gray-600 text-white">
            Nam bibendum eros vel ex tincidunt, vel placerat quam eleifend. In hac habitasse platea dictumst.
          </p>
          </div>
        </div>
      </div>

    {/* Blok konten baru */}
    <div className="flex items-center justify-center min-h-screen bg-white via-emerald-200 to-emerald-100">
      <div className="w-1/2 p-8 bg-white">
        <h1 className="text-3xl font-bold mb-4 text-emerald-700">About Us</h1>
        <p className="text-lg mb-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend mi sit amet magna posuere, vel fermentum felis lacinia. Donec vel arcu eget tortor dictum maximus.
        </p>
        <p className="text-lg mb-4 text-gray-600">
          Integer nec velit et elit sodales laoreet. Proin fringilla ex quis justo consequat, sed convallis elit vestibulum.
        </p>
        <p className="text-lg mb-4 text-gray-600">
          Nam bibendum eros vel ex tincidunt, vel placerat quam eleifend. In hac habitasse platea dictumst.
        </p>
        <div className="mt-28">
          <Link href="/">
            <div className="bg-emerald-700 hover:bg-white hover:text-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
              Back to Home
            </div>
          </Link>
        </div>
      </div>
      <div className="w-1/2 pl-8 border-l border-emerald-500">
        {/* Gambar di sini */}
        <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us" className="w-full h-auto rounded shadow" />
      </div>
    </div>
    <Footer/>
    </>
  );
}
