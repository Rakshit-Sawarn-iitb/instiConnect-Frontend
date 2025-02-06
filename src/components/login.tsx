import React, { useState } from "react";
import { loginUser } from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await loginUser(email, password);
      alert("Login Successful!");
      console.log("Access Token:", response.access);
    } catch (error) {
      setErrorMessage("Invalid credentials or server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-lexend bg-[#1E1A28] relative overflow-hidden">
      <div className="w-full max-w-sm p-8 rounded-lg shadow-lg text-center relative z-10 bg-[#2b273b]">
        <h2 className="text-5xl font-bold text-[#d8d8d8] mb-1 -translate-y-3">iC</h2>
        <p className="text-xl text-[#ffffff] mb-14 -translate-y-3">Welcome to instiConnect!</p>

        {/* Form with onSubmit */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#3C3750] text-[#D8D8D8] placeholder-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#3C3750] text-[#D8D8D8] placeholder-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
            required
          />
          <div className="flex justify-end">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Error Message Display */}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-6 px-4 py-2 text-white rounded-md 
            ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"}`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center justify-center mt-6">
          <span className="w-full border-t border-gray-300"></span>
          <span className="px-3 text-sm text-gray-50">OR</span>
          <span className="w-full border-t border-gray-300"></span>
        </div>

        <p className="mt-4 text-xl text-[#ffffff]">
          Don't have an account?{" "}
          <a href="http://localhost:5173/register" className="text-[#cba5f7] hover:underline">
            Sign Up
          </a>
        </p>
      </div>

      {/* Footer */}
      {/* <div className="absolute bottom-0 w-full flex flex-col items-center py-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        <hr className="w-3/4 border-t-[5px] border-[#d9d9d9] mb-6" />
        <p className="text-xl text-[#ffffff] mt-2">
          Created with{" "}
          <span className="text-red-500 font-semibold">❤️</span> by team{" "}
          <span className="font-semibold">DashingDevs</span> in collaboration
          with <span className="font-semibold">DevCom</span>
        </p>
      </div> */}
    </div>
  );
}

export default Login;
