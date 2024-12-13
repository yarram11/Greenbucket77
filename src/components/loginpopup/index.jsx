"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginPopup = ({ closePopup }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign In and Sign Up forms

  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-lg z-50 p-6">
      {/* Close Button */}
      <button
        aria-label="Close login popup"
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
        onClick={closePopup}
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {isSignUp ? "Create an Account" : "Welcome Back!"}
      </h2>

      {/* Google Sign-In Button */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })} // Redirects to homepage on successful login
        className="w-full flex items-center justify-center p-3 mb-4 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        {/* Placeholder for developer-provided Google icon */}
        <span className="mr-2">🌐</span>
        {isSignUp ? "Sign up with Google" : "Sign in with Google"}
      </button>

      {/* GitHub Sign-In Button */}
      <button
        onClick={() => signIn("github", { callbackUrl: "/" })} // Redirects to homepage on successful login
        className="w-full flex items-center justify-center p-3 mb-4 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
      >
        {/* Placeholder for developer-provided GitHub icon */}
        <span className="mr-2">🐙</span>
        {isSignUp ? "Sign up with GitHub" : "Sign in with GitHub"}
      </button>

      {/* Divider */}
      <div className="relative flex items-center mb-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-3 text-gray-500 text-sm">Or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Sign In / Sign Up Form */}
      <form className="space-y-4">
        {isSignUp && (
          <>
            {/* Name Field */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
            {/* Mobile Number Field */}
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </>
        )}

        {/* Username Field */}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        />

        {/* Password Field */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        />

        {/* Confirm Password Field (Sign-Up only) */}
        {isSignUp && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {isSignUp ? "Create Account" : "Sign In"}
        </button>
      </form>

      {/* Toggle Between Sign In and Sign Up */}
      <div className="mt-6 text-center">
        {isSignUp ? (
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <button
              className="text-blue-600 hover:underline"
              onClick={() => setIsSignUp(false)}
            >
              Sign In
            </button>
          </p>
        ) : (
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <button
              className="text-green-600 hover:underline"
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
