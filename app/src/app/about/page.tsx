import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white via-emerald-200 to-emerald-100">
    <div className="container mx-auto p-8 bg-white">
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
      <div className="mt-8">
        <Link href="/">
          <div className="bg-emerald-700 hover:bg-white hover:text-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
            Back to Home
          </div>
        </Link>
      </div>
    </div>
    </div>
  );
}
