import React from "react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
    return (
        <form className="space-y-6 px-6 pb-4">
            <h3 className="text-xl font-medium text-white">
                Sign in to Leet Clone
            </h3>
            <div>
                <label
                    htmlFor="email"
                    className="text-sm font-medium block mb-2 text-gray-300"
                >
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="text-sm font-medium block mb-2 text-gray-300"
                >
                    Your Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                    placeholder="Password"
                />
            </div>
            <button
                type="submit"
                className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 text-center py-2.5 bg-brand-orange hover:bg-brand-orange-s"
            >
                Log In
            </button>
            <button className="flex w-full justify-end">
                <a
                    href="#"
                    className="text-sm block text-brand-orange hover:underline w-full text-right"
                >
                    Forgot Password?
                </a>
            </button>
            <div className="text-sm font-medium text-gray-300">
                Not Registered?{" "}
                <a href="#" className="text-blue-700 hover:underline">
                    Create Account
                </a>
            </div>
        </form>
    );
};
export default Login;
