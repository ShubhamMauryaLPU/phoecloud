import React, { useState, useEffect } from "react";

const UserSettings = () => {
    const storedUser = sessionStorage.getItem("user");
    const initialUserData = storedUser ? JSON.parse(storedUser) : { username: "", email: "", password: "", image: null };

    const [formData, setFormData] = useState(initialUserData);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        sessionStorage.setItem("user", JSON.stringify(formData));
    }, [formData]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        setSaved(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                image: URL.createObjectURL(file),
            }));
            setSaved(false);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem("user");
        alert("Logged out successfully!");
        window.location.reload();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem("user", JSON.stringify(formData));
        setSaved(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-pink-400 p-4">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">User Settings</h1>
            <form
                className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg flex flex-col"
                onSubmit={handleSubmit}
            >
                {/* Profile Image Upload */}
                <div className="flex flex-col items-center mb-4">
                    <label htmlFor="imageUpload" className="cursor-pointer">
                        {formData.image ? (
                            <img
                                src={formData.image}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500">
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
                    <label className="block text-gray-700">Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        className="py-2 w-full border rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                        value={formData.username}
                    />
                </div>

                {/* Email Input */}
                <div className="my-3 w-full">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className="py-2 w-full border rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>

                {/* Password Input */}
                <div className="my-3 w-full">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter New Password"
                        className="py-2 w-full border rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={handleChange}
                        value={formData.password}
                    />
                </div>

                {/* Save Button */}
                <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-500 hover:bg-blue-600 text-white py-2 transition-all"
                >
                    Save Changes
                </button>

                {/* Success Message */}
                {saved && <p className="text-green-500 text-center mt-4">Settings updated successfully!</p>}

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="w-full rounded-lg bg-red-500 hover:bg-red-600 text-white py-2 mt-4 transition-all"
                >
                    Logout
                </button>
            </form>
        </div>
    );
};

export default UserSettings;
