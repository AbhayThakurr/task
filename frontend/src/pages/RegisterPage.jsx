import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-cyan-900 via-teal-800 to-teal-600">
      <div className="bg-gradient-to-b from-navy-800 to-navy-900 p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center text-teal-400 mb-6">
          REGISTER
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-navy-700 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="username"
              className="w-full p-3 rounded bg-navy-600 text-white placeholder-gray-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
              className="w-full p-3 rounded bg-navy-600 text-white placeholder-gray-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder="Date of Birth"
              className="w-full p-3 rounded bg-navy-600 text-gray placeholder-gray-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              className="w-full p-3 rounded bg-navy-600 text-gray placeholder-gray-400"
              required
            />
          </div>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-teal-400 text-white py-3 rounded-lg font-semibold hover:bg-teal-500 transition duration-300"
          >
            {loading ? "Registering..." : "REGISTER"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
