import React from 'react'
import "./App.css";
import HomePage from './pages/home/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import RevenuePage from './pages/services/revenue/RevenuePage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Navbar/><HomePage/><Footer/></>} />
        <Route path='/home' element={<><Navbar/><HomePage/><Footer/></>} />
        <Route path='/about' element={<><Navbar/><HomePage/><Footer/></>} />
        <Route path='/services' element={<><Navbar/><RevenuePage/><Footer/></>} />
        <Route path='/contact' element={<><Navbar/><HomePage/><Footer/></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App