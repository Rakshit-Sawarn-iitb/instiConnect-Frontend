import React, { useState } from "react";

import { registerUser } from "../api"; // Import the API function

function Register() {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    roll_number: "",
    phone_number: "",
    email: "",  // Changed to 'email'
    department: "",
    hostel: "",
    current_year: 1,
    date_of_birth: "",
    bio: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form data changes (for both <input> and <textarea>)
  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await registerUser(formData);
      if (response.status === 200) {
        alert("Registered successfully!");
        // You can redirect or reset the form here if necessary
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-lexend bg-[#1E1A28] relative overflow-hidden">
      <div className="w-full max-w-sm p-8 rounded-lg shadow-lg text-center relative z-10 bg-[#2b273b]">
        <h2 className="text-7xl font-bold text-[#d8d8d8] mb-1 -translate-y-3">iC</h2>
        <p className="text-2xl text-[#ffffff] mb-14 -translate-y-3">Welcome to instiConnect!</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3C3750] text-[#D8D8D8] placeholder-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3C3750] text-[#D8D8D8] placeholder-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3C3750] text-[#D8D8D8] placeholder-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
          />
          <input
            type="text"
            name="roll_number"
            placeholder="Roll Number"
            value={formData.roll_number}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3C3750] text-[#D8D8D8] placeholder-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3C3750] text-[#D8D8D8] placeholder-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
          />
          <input
            type="email"
            name="email"  // Updated to 'email'
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3C3750] text-[#D8D8D8] placeholder-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3C3750] text-[#D8D8D8] placeholder-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
          />
          <input
            type="text"
            name="hostel"
            placeholder="Hostel"
            value={formData.hostel}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3C3750] text-[#D8D8D8] placeholder-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
          />
          <input
            type="number"
            name="current_year"
            placeholder="Current Year"
            value={formData.current_year}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3C3750] text-[#D8D8D8] placeholder-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
          />
          <input
            type="date"
            name="date_of_birth"
            placeholder="Date of Birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3C3750] text-[#D8D8D8] placeholder-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
          />
          <textarea
            name="bio"
            placeholder="Bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3C3750] text-[#D8D8D8] placeholder-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
          ></textarea>

          <button
            type="submit"
            className="w-3/2 mx-auto mt-6 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {errorMessage && (
          <p className="mt-4 text-red-500 text-sm">{errorMessage}</p>
        )}

        <div className="flex items-center justify-center mt-6">
          <span className="w-full border-t border-gray-300"></span>
          <span className="px-3 text-sm text-gray-50">OR</span>
          <span className="w-full border-t border-gray-300"></span>
        </div>

        <p className="mt-4 text-xl text-[#ffffff]">
          Already have an account?{' '}
          <a href="#" className="text-[#cba5f7] hover:underline">
            Login
          </a>
        </p>
      </div>

      <div className="absolute bottom-0 w-full flex flex-col items-center py-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        <hr className="w-3/4 border-t-[5px] border-[#d9d9d9] mb-6" />
        <p className="text-xl text-[#ffffff] mt-2">
          Created with{' '}
          <span className="text-red-500 font-semibold">❤️</span> by team{' '}
          <span className="font-semibold">DashingDevs</span> in collaboration
          with <span className="font-semibold">DevCom</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
