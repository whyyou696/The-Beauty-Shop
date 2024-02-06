
export default function Register () {
  return (
    <div className="login-form-container flex items-center justify-center min-h-screen bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-100">
      <form className="login-form bg-white p-20 rounded shadow-xl bg-opacity-30 backdrop-blur-md">
        <h2 className="text-2xl font-bold mb-4 text-emerald-700 text-center">
          Register
        </h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-emerald-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="border rounded w-full py-2 px-3 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-emerald-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded w-full py-2 px-3 text-white"
            required
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
            required
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-700 hover:bg-white hover:text-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Register
        </button>
        <p className="text-center text-gray-900 text-sm mt-4">
          Already have an account?{" "}
        </p>
      </form>
    </div>
  );
};
