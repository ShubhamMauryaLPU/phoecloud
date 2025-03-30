import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const LoginPage = () => {
    let navigate=useNavigate();
  let [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  let handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    const user=JSON.stringify(formData);
    sessionStorage.setItem("user",user);
    setFormData({ username: "", password: "" });
    // navigate("/", { replace: true });
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-pink-400 p-4">
      
      <form
        className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg flex flex-col min-h-[50vh]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-blue-500 text-center mb-6">Login</h1>
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
        <div className="w-full">
          <p className="text-sm text-gray-700 cursor-pointer hover:text-blue-500 text-right mb-2">
            Forgot Password?
          </p>
          <button
            type="submit"
            className="w-full rounded-3xl bg-pink-400 hover:bg-pink-500 text-white py-2 transition-all"
          >
            Log in
          </button>
        </div>
        <Link to={"/user/register"}>
          <p className="float-right py-3 text-blue-700">
            Don't have account Register Here?
          </p>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
