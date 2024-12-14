import { useRouter } from "next/router";
import { FaGoogle, FaApple } from "react-icons/fa";

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md space-y-6">
      <h2 className="text-2xl font-bold">Log in to your account</h2>
      <p className="text-sm text-gray-400">
        Don’t have an account?{" "}
        <a
          onClick={() => router.push("/Register")}
          className="text-indigo-500 hover:underline cursor-pointer"
        >
          Register
        </a>
      </p>
      <form onSubmit={handleLogin} className="w-full space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 text-sm text-gray-900 bg-gray-200 rounded-lg"
        />
        <div className="relative">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 text-sm text-gray-900 bg-gray-200 rounded-lg"
          />
          <span className="absolute right-4 top-2.5 text-gray-600 cursor-pointer">👁️</span>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
        >
          Log in
        </button>
      </form>
      <div className="flex items-center w-full space-x-4">
        <hr className="w-full border-gray-600" />
        <span className="w-full text-sm text-gray-400">Or log in with</span>
        <hr className="w-full border-gray-600" />
      </div>
      <div className="flex space-x-4">
        <button className="flex items-center px-4 py-2 space-x-2 text-white bg-gray-700 rounded-lg hover:bg-gray-600">
          <FaGoogle />
          <span>Google</span>
        </button>
        <button className="flex items-center px-4 py-2 space-x-2 text-white bg-gray-700 rounded-lg hover:bg-gray-600">
          <FaApple />
          <span>Apple</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
