"use client";

import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormValues, signupSchema } from "../../schemas/signup.schema";
import signupAction from "../../server/signup.actions";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


export default function SignUpForm() {

  const router = useRouter()


  const { register, handleSubmit, setError, formState: { errors } } = useForm<SignupFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },


    resolver: zodResolver(signupSchema),

    mode: "onTouched",

  });

  const onSubmit: SubmitHandler<SignupFormValues> = async (values) => {
    try {
      console.log("Signup Form Submitting...", values);
      const response = await signupAction(values);
      console.log("Signup Action Result:", response);

      if (response?.success) {
        console.log("Signup Successful! Redirecting in 2s...");
        toast.success(response.message || "Signup successful");
        setTimeout(() => {
          console.log("Pushing to /login now");
          router.push('/login')
        }, 2000)
      } else {
        if (response?.errors) {
          Object.keys(response.errors).forEach((key) => {
            setError(key as keyof SignupFormValues, {
              message: (response.errors as Record<string, string>)[key],
            });

          }
          )
        }
      }





    }
    catch (error) {
      toast.error("An error occurred during signup.");
    }

  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 h-full flex flex-col justify-center relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-primary-50 z-0"></div>
      <div className="relative z-10">
        <div className="mb-8 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Create Your Account
          </h2>
          <p className="text-gray-500">Start your journey with us today!</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 text-sm font-medium bg-white"
          >
            <FontAwesomeIcon
              icon={faGoogle}
              width={20}
              className="text-red-500"
            />
            <span>Google</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 text-sm font-medium bg-white"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              width={20}
              className="text-blue-600"
            />
            <span>Facebook</span>
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500 text-xs">
              Or continue with email
            </span>
          </div>
        </div>

        <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                id="name"
                {...register("name")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder-gray-400 text-sm"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                {...register("email")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder-gray-400 text-sm"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+0123456789"
                {...register("phone")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder-gray-400 text-sm"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder-gray-400 text-sm"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

            <div className="password-strength pt-2 flex items-center gap-2 justify-between">
              <div className="bar w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="progress w-1/4 h-2 bg-red-500 rounded-full"></div>
              </div>
              <span>weak</span>
            </div>
            <p className="text-xs text-gray-500 -mt-1">
              Password must be at least 8 characters long
            </p>
          </div>

          <div>
            <label
              htmlFor="rePassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="rePassword"
              placeholder="Confirm your password"
              {...register("rePassword")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder-gray-400 text-sm"
            />
            {errors.rePassword && <p className="text-red-500 text-xs mt-1">{errors.rePassword.message}</p>}
          </div>

          <div>
            <input
              type="checkbox"
              id="terms"
              {...register("terms")}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the terms and conditions
            </label>
            {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms.message}</p>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-primary-600 text-white font-bold py-2.5 rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 text-sm"
            >
              <span>Create My Account</span>
              <FontAwesomeIcon icon={faUser} width={20} />
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-primary-600 hover:text-primary-500 hover:underline transition-colors"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
