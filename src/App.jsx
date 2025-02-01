import React from 'react'
import "./App.css";
import HomePage from './pages/home/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import RevenuePage from './pages/services/revenue/RevenuePage';
import AboutPage from './pages/about/AboutPage';
import FinancePage from './pages/services/finance/FinancePage';
import DigitalPage from './pages/services/digital/DigitalPage';
import ContactPage from './pages/contact/CantactPage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Navbar/><HomePage/><Footer/></>} />
        <Route path='/home' element={<><Navbar/><HomePage/><Footer/></>} />
        <Route path='/about' element={<><Navbar/><AboutPage/><Footer/></>} />
        <Route path='/services/revenue' element={<><Navbar/><RevenuePage/><Footer/></>} />
        <Route path='/services/finance' element={<><Navbar/><FinancePage/><Footer/></>} />
        <Route path='/services/digital' element={<><Navbar/><DigitalPage/><Footer/></>} />
        <Route path='/contact' element={<><Navbar/><ContactPage/><Footer/></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App