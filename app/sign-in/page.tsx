"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

// Define the Zod schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Define the TypeScript type for form data based on the Zod schema
type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // Handle form submission
  const onSubmit = (data: LoginFormData) => {
    console.log(data); // Replace this with your login logic
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">

    <div className="flex items-center  w-full h-[70vh]  justify-center mx-auto  max-w-7xl bg-black rounded-3xl text-white">
      <div className="flex-1 flex items-center justify-center">
        <Image
          src={"/images/Group.png"}
          alt="login image"
          width={600}
          height={600}
          className="w- h-fit object-contain"
        />
      </div>
      <div className="flex-1 flex justify-center items-center h-full w-full">
        <div className="  w-full max-w-md p-8 space-y-6 bg-black border border-gray-700 rounded-lg ">
          <h2 className="text-3xl font-bold text-center">Login</h2>

          {/* Google Login Button */}
          <button className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-sm font-medium text-white border-white border rounded-md ">
            <Image src={"/images/google.png"} width={30} height={30} className="w-6 h-6" alt="google icon"/>
            <span>Login with Google</span>
          </button>

          <div className="relative flex items-center justify-center py-4">
            <span className="absolute px-2 bg-black">OR</span>
            <div className="w-full border-t border-gray-500"></div>
          </div>

          {/* Form with validation */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Input */}
            <div className="space-y-1">
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="w-full px-2 py-2 text-xl  text-white bg-transparent border-b-white border-b  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="w-full px-2 py-2 text-xl  text-white bg-transparent border-b-white border-b  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <div className="relative p-[1px] max-w-32 mx-auto w-full  items-center justify-center  rounded-2xl bg-gradient-to-r to-[#FF5D5D] from-[#4794FF]">
            <button className="relative w-full h-full inline-flex items-center justify-center p-2 md:p-4 border- overflow-hidden font-semibold transition-all duration-200 ease-out rounded-2xl bg-black  group">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r to-[#FF5D5D] from-[#4794ff]">
                Login
              </span>
             
            </button>
          </div>
          </form>

          {/* Sign Up Link */}
          <p className="text-sm text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-green-500 hover:underline"
            >
              Get Started
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
