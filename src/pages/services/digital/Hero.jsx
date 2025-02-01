import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col  justify-center items-center bg-[url("/image/digital2.webp")] text-white h-[90vh] bg-cover bg-no-repeat'>
        <h1 className='text-4xl text-center font-bold font-serif w-[90%] lg:w-[80%] bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-300 bg-clip-text text-transparent '>Unleash Limitless Potential with PhoeTech's Digital Transformation Suite</h1>
        <p className='text-xl text-center pt-4  font-serif w-[85%] lg:w-[70%] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>Welcome to the future of business evolution. PhoeTech's Digital Transformation Suite is not just a service; it's a catalyst for unparalleled growth, efficiency, and innovation. Embrace the power to reshape your business landscape and thrive in the digital age.</p>
    </div>
  )
}

export default Hero
