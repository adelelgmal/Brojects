"use client";

import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormValues, loginSchema } from '../../schemas/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import loginAction from '../../server/login.actions';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { setToken } from "../../server/auth.actions";
import { setAuthInfo } from '../../store/auth.slice';
import { useDispatch } from 'react-redux';

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { register, handleSubmit, setError, formState: { errors } } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
    try {
      const result = await loginAction(values);

      if (result.success) {
        await setToken(result.data.token, values.rememberMe);
        dispatch(setAuthInfo({ isAuthenticated: true, userInfo: result.data.user }));

        toast.success(result?.message);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        if (result?.errors) {
          Object.keys(result.errors).forEach((key) => {
            setError(key as keyof LoginFormValues, {
              message: result.errors[key],
            });
          });
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  











    return (
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl space-y-6">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome Back</h1>
                <p className="text-gray-500 text-sm">Please enter your credentials to log in.</p>
            </div>

            <div className="space-y-4">
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group bg-white shadow-sm"
                >
                    <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-lg group-hover:scale-110 transition-transform" width={16} />
                    <span className="font-medium text-gray-700">Continue with Google</span>
                </button>

                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group bg-white shadow-sm"
                >
                    <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 text-lg group-hover:scale-110 transition-transform" width={16} />
                    <span className="font-medium text-gray-700">Continue with Facebook</span>
                </button>
            </div>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 ml-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                    
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="name@example.com"
                    />
                </div>
                {errors.email && <p className="text-sm text-red-600 ml-1">{errors.email.message}</p>}

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 ml-1">
                            Password
                        </label>
                        <a href="#" className="text-sm font-medium text-red-600 hover:text-red-500 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="••••••••"
                    />
                </div>
                {errors.password && <p className="text-sm text-red-600 ml-1">{errors.password.message}</p>}

                <div>
                    <input type="checkbox" {...register("rememberMe")} id="rememberMe" className="mr-2" />
                    <label htmlFor="rememberMe" className="text-sm text-gray-600">
                        Keep me logged in
                    </label>
                </div>



                <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                    Log In
                </button>

                <p className="text-center text-sm text-gray-600">
                     have an account?{' '}
                    <a href="#" className="font-semibold text-red-600 hover:text-red-500 hover:underline">
                        Sign up
                    </a>
                </p>
            </form>
        </div>
    )
}
