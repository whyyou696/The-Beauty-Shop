import Link from "next/link"

const AboutSection = () => {
    return (
        <div className="container mx-auto flex mt-20">
        <div className="flex items-center justify-center min-h-screen bg-white via-emerald-200 to-emerald-100">
          <div className="w-1/2 p-8 bg-white">
            <h1 className="text-3xl font-bold mb-4 text-emerald-700">
              About Us
            </h1>
            <p className="text-lg mb-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              eleifend mi sit amet magna posuere, vel fermentum felis lacinia.
              Donec vel arcu eget tortor dictum maximus.
            </p>
            <p className="text-lg mb-4 text-gray-600">
              Integer nec velit et elit sodales laoreet. Proin fringilla ex
              quis justo consequat, sed convallis elit vestibulum.
            </p>
            <p className="text-lg mb-4 text-gray-600">
              Nam bibendum eros vel ex tincidunt, vel placerat quam eleifend.
              In hac habitasse platea dictumst.
            </p>
            <div className="mt-28">
              <Link href="/about">
                <div className="bg-emerald-700 hover:bg-white hover:text-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                  See About Us.
                </div>
              </Link>
            </div>
          </div>
          <div className="w-1/2 pl-8 border-l border-emerald-500">
            {/* Gambar di sini */}
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFpciUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
              alt="About Us"
              className="w-full h-auto rounded shadow"
            />
          </div>
        </div>
      </div>
    )
}

export default AboutSection;