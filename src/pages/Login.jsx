import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === "" || password === "") {
      setErrorMessage("Both fields are required.");
      return;
    }

    if (email === "user@example.com" && password === "password123") {
      navigate("/");
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-24 mt-16">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>

              {/* Password */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-secondary text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-orange-600 transition-all w-full"
              >
                Login
              </button>
            </form>

            {/* Link to Register Page (if needed) */}
            <div className="text-center mt-4">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <a href="/register" className="text-secondary hover:underline">
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
