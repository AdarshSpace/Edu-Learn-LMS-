'use client';

import { useRouter } from "next/navigation";
import Link from "next/link";

import { signupUser } from "../serverActions/signup_user";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const signupSchema = z.object({
    email: z
      .string()
      .toLowerCase()
      .email("Please enter a valid email")
      .refine(
        (value) => {
          const allowedDomains = ["com", "in", "net"];
          const domain = value.split(".").pop();
          return allowedDomains.includes(domain || "");
        },
        {
          message: "Only .com, .in, and .net domains are valid",
        }
      ),

    password: z
      .string()
      .min(5, "Password must be at least 5 characters long")
      .max(20, "Password must not exceed 20 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
        "Password must contain lowercase, uppercase, number, and special character"
      ),

      confirmPassword: z
      .string()
      .min(5, "Confirm password must be at least 5 characters long")
      .max(20, "Confirm password must not exceed 20 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
        "Confirm password must contain lowercase, uppercase, number, and special character"
      )
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });


export default function SignupPage() {
    const { register, handleSubmit,  setError, formState: { errors } } = useForm<z.infer<typeof signupSchema>>({ resolver: zodResolver(signupSchema) });

    const firstError = errors.root?.message || Object.values(errors)[0]?.message;
      
    const router = useRouter();

    const onSubmit = async (data: z.infer<typeof signupSchema>) => {

        const { email, password, confirmPassword } = data;
        try {
            const res = await signupUser(email, password, confirmPassword)

            if(!res.success) {
                setError("root", { type: "server",  message: res.message,});
                return;
            }

             if(res.success) {
                router.push("/login");
            } ;
            
        } catch (error) {
            console.error(error);
        }
    } 

    
    return (
      <div className="min-h-screen bg-[#F8F5FF] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <div className="bg-white border border-purple-100 rounded-3xl shadow-lg p-6 sm:p-8">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-700 to-purple-500 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
            </div>
  
            {/* Heading */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#2E1065]">
                Create your account
              </h1>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Start your learning journey today
              </p>
            </div>
  
            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                {/* Email */}
                <label className="block text-sm font-semibold text-[#2E1065] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="you@example.com"
                  className="w-full h-12 px-4 rounded-2xl border border-purple-200 outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-[#2E1065] mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="********"
                    className="w-full h-12 px-4 rounded-2xl border border-purple-200 outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
  
                <div>
                  {/* Confirm Password */}
                  <label className="block text-sm font-semibold text-[#2E1065] mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    {...register("confirmPassword")}
                    className="w-full h-12 px-4 rounded-2xl border border-purple-200 outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
  
              <p className="text-sm text-gray-500">
                Password must be at least 5 characters long.
              </p>

              {firstError && ( <p className="text-red-500 text-center text-sm"> {String(firstError)} </p>)}
            


              {/* Credentials Signup */}
              <button
                type="submit"
                className="w-full h-12 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-semibold transition"
              >
                Create Account
              </button>
            </form>
  
            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-sm">Or continue with</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
  
            {/* Social Signup */}
            <div className="grid grid-cols-2 gap-4">
              <button className="h-12 rounded-2xl border border-purple-200 hover:bg-purple-50 font-medium text-[#2E1065] transition">
                Google
              </button>
              <button className="h-12 rounded-2xl border border-purple-200 hover:bg-purple-50 font-medium text-[#2E1065] transition">
                GitHub
              </button>
            </div>
  
            {/* Sign In */}
            <p className="text-center text-sm text-gray-500 mt-8">
              Already have an account?{' '}
              <span className="text-purple-700 font-semibold cursor-pointer hover:underline">
                <Link href="/login">Sign in</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  