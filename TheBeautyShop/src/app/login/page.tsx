import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo1.png";
import { handleLogin } from "../actions/users";

export default function Login() {
  return (
    <div className="login-form-container flex items-center justify-center min-h-screen bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-100">
      <form className="login-form bg-white p-20 rounded shadow-md backdrop-blur-md rounded" action={handleLogin}>
        <div className="mb-4 flex justify-center">
          <Image
            src={logo}
            alt="Logo"
            className="w-20 h-20"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-emerald-700 text-center">
          Login
        </h1>
        <div className="mb-4 mt-10">
          <label
            htmlFor="username"
            className="block text-emerald-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="username"
            id="username"
            name="username"
            className="border rounded w-full py-2 px-3 text-white"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-emerald-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded w-full py-2 px-3 text-white"
          />
        </div>
        <div className="mb-4 justify-center items-center">
        <button
          type="submit"
          className="bg-emerald-700 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 align-items-center"
        >
          Login
        </button>
        <p className="text-center text-gray-900 text-sm mt-16">
          Don't have an account?{" "}
        </p>
        
        <Link href="/register">
        <p className="text-center text-emerald-800 text-sm hover:text-emerald-500">
          Register Now.
          </p>
          </Link>
        </div>
      </form>
    </div>
  );
}
