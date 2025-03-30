import React, { useState } from "react";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  let [formData, setFormData] = useState({
    image: null,
    username: "",
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  let handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let data=JSON.stringify(formData);
    sessionStorage.clear();
    sessionStorage.setItem("user",data);
    setFormData({ image: null, username: "", email: "", password: "" });
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-pink-400 p-4">
      <h1 className="text-3xl font-bold text-white text-center mb-6">
        Register
      </h1>
      <form
        className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg flex flex-col"
        onSubmit={handleSubmit}
      >
        {/* Image Upload */}
        <div className="flex flex-col items-center mb-4">
          <label htmlFor="imageUpload" className="cursor-pointer">
            {formData.image ? (
              <img
                src={formData.image}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
              />
            ) : (
              <div className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500">
                Upload
              </div>
            )}
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Username Input */}
        <div className="my-3 w-full">
          <div className="relative">
            <i className="fa-solid fa-user absolute left-3 top-3 text-gray-500"></i>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="pl-10 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              value={formData.username}
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="my-3 w-full">
          <div className="relative">
            <i className="fa-solid fa-envelope absolute left-3 top-3 text-gray-500"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="pl-10 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="my-3 w-full">
          <div className="relative">
            <i className="fa-solid fa-lock absolute left-3 top-3 text-gray-500"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="pl-10 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full rounded-3xl bg-pink-400 hover:bg-pink-500 text-white py-2 transition-all"
        >
          Register
        </button>
        <Link to={"/user/login"}>
          <p className="float-right py-3 text-blue-700">
            Don't have account Register Here?
          </p>
        </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
