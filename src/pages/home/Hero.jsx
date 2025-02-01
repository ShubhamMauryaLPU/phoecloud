import React from 'react'
import { Link } from 'react-router-dom'
import { Spotlight } from "../../ui/spotlight-new";
const Hero = () => {
  return (
    <div className='bg-[url(/image/heroImg.webp)] bg-no-repeat bg-cover w-full h-[100vh] relative overflow-hidden flex justify-center items-center z-1'>
      <Spotlight />
      <div className='flex flex-col justify-center items-center text-center'>
      <h1 className=' text-blue-100 font-[new-times-roman]  font-extrabold text-4xl md:text-5xl'>Welcome to PhoeTech</h1>
      <p className='  py-3 text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-green-600'>Unleashing FinTech Potential</p>
      <button className='mt-3'><Link to={"/contact"} className='text-white bg-blue-600 py-2 px-4 rounded-sm hover:bg-blue-800 duration-1000'  > Get Started</Link></button>
      </div>
    </div>
  )
}

export default Hero