"use client"

import CarouselHome from "@/components/CarouselHome"
import NavbarLink from "@/components/NavbarLink"

export default function Home() {
  return (
    <>
      <NavbarLink/>
      <CarouselHome/>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content text-center text-black">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}