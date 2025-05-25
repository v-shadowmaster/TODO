import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authService";

function Register({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await register(name, email, password);
      if (response.success) {
        setUser(response.data);
        navigate("/dashboard");
      } else {
        setError(response.error || "Login failed");
      }
    } catch (e) {
      setError(e.response?.data?.error || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-300 p-8 rounded-none">
        {/* Logo */}
        <svg width="50" height="50" viewBox="0 0 10 9" fill="none">
          <path
            d="M3.5 0.969346H1V8.5H8.5L8.46667 5.83333M9 3.16667V0.5M9 0.5H6.33333M9 0.5L5.26667 4.23333"
            stroke="#f03603"
            strokeLinecap="square"
          ></path>
        </svg>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Create your account
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Sign up to start using Browserbase
        </p>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 text-red-600 text-center">{error}</div>
          )}
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full border border-gray-300 px-3 py-2 rounded-none text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full border border-gray-300 px-3 py-2 rounded-none text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-gray-300 px-3 py-2 rounded-none text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-orange-400" : "bg-orange-600 hover:bg-orange-700"
            } text-white font-semibold py-2 rounded-none transition-colors`}
          >
            {loading ? "Registering User.... " : "Create Account"}
          </button>
        </form>

        {/* Footer Links */}
        <p className="mt-6 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-600 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
