import { FaGoogle, FaApple } from "react-icons/fa";

const AuthForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md space-y-6 ">
      <h2 className="text-2xl font-bold ">Create an account</h2>
      <p className="text-sm text-gray-400">
        Already have an account?{" "}
        <a href="#" className="text-indigo-500 hover:underline">
          Log in
        </a>
      </p>
      <form className="w-full space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="First name"
            className="w-1/2 px-4 py-2 text-sm text-gray-900 bg-gray-200 rounded-lg"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-1/2 px-4 py-2 text-sm text-gray-900 bg-gray-200 rounded-lg"
          />
        </div>
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
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <p className="text-sm text-gray-400">
            I agree to the{" "}
            <a href="#" className="text-indigo-500 hover:underline">
              Terms & Conditions
            </a>
          </p>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
        >
          Create account
        </button>
      </form>
      <div className="flex items-center w-full space-x-4">
        <hr className="w-full border-gray-600" />
        <span className="w-full text-sm text-gray-400">Or register with</span>
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

export default AuthForm;
