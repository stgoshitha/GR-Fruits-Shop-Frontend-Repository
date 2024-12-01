import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      setErrorMessage("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    console.log("User registered:", { name, email, password });

    navigate("/login");
  };

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-24 mt-16">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>

              {/* Email Address */}
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

              {/* Confirm Password */}
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                Register
              </button>
            </form>

            {/* Link to Login Page */}
            <div className="text-center mt-4">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-secondary hover:underline">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
