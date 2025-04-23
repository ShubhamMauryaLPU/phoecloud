import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import RevenuePage from "./pages/services/revenue/RevenuePage";
import AboutPage from "./pages/about/AboutPage";
import FinancePage from "./pages/services/finance/FinancePage";
import DigitalPage from "./pages/services/digital/DigitalPage";
import ContactPage from "./pages/contact/CantactPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Profile from "./components/Profile";
import UserSettings from "./components/UserSettings";
import VisionPage from "./components/VisionPage";

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOnlineBanner, setShowOnlineBanner] = useState(false);

  const handleOnline = () => {
    setIsOnline(true);
    setShowOnlineBanner(true);
    setTimeout(() => {
      setShowOnlineBanner(false);
    }, 2000);
  };

  const handleOffline = () => {
    setIsOnline(false);
    setShowOnlineBanner(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/revenue" element={<RevenuePage />} />
        <Route path="/services/finance" element={<FinancePage />} />
        <Route path="/services/digital" element={<DigitalPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user/register" element={<RegisterPage />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/setting" element={<UserSettings />} />
        <Route path="/vision" element={<VisionPage />} />
      </Routes>
      <Footer />

      {!isOnline && (
        <div className="fixed bottom-0 w-full bg-red-600 text-white text-center p-2 z-50">
          ⚠️ You are currently offline
        </div>
      )}
      {showOnlineBanner && (
        <div className="fixed bottom-0 w-full bg-green-600 text-white text-center p-2 z-50">
          ✅ Back to Online
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
