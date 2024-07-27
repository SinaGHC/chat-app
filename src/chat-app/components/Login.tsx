import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface FormInputs {
  username: string;
  password: string;
}

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              {...register("username", { required: "Username is required" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password.message}</p>
            )}
          </div>
          <div className="flex items-center justify-between mb-3">
            <button
              className="bg-blue-500 block hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <Link
              className="font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-400 text-sm">Don't have an account?</span>
          <Link
            className="font-bold text-sm text-blue-500 hover:text-blue-800 ml-2"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
