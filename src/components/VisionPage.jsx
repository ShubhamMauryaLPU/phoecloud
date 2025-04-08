import React from "react";

const VisionPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="max-w-6xl bg-gray-800 p-10 rounded-2xl shadow-lg text-center text-white">
        <h1 className="text-5xl font-bold text-white mb-6">Our Vision</h1>
        <p className="text-lg text-gray-300 mb-8">
          At phoeTech, we aim to revolutionize the IT landscape by delivering cutting-edge solutions that empower businesses to achieve digital transformation effortlessly. 
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-700 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-white">Innovation</h2>
            <p className="text-gray-300">We continuously evolve to integrate the latest technological advancements.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-white">Customer-Centric</h2>
            <p className="text-gray-300">We tailor our solutions to meet the unique needs of our clients.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-white">Security</h2>
            <p className="text-gray-300">Ensuring data integrity and cybersecurity in all our solutions.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-white">Sustainability</h2>
            <p className="text-gray-300">We advocate for eco-friendly technology practices and digital responsibility.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-white">Scalability</h2>
            <p className="text-gray-300">Building robust solutions that grow with your business.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-white">Collaboration</h2>
            <p className="text-gray-300">Fostering partnerships to drive innovation and success.</p>
          </div>
        </div>

        <div className="mt-12 text-left text-gray-300">
          <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>Decades of industry experience with a proven track record.</li>
            <li>Customized IT solutions tailored for businesses of all sizes.</li>
            <li>State-of-the-art security measures to protect your data.</li>
            <li>Seamless integration with your existing digital infrastructure.</li>
            <li>24/7 customer support and dedicated service teams.</li>
          </ul>
        </div>

        <div className="mt-12 text-left text-gray-300">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Commitment</h2>
          <p>
            We are dedicated to delivering solutions that are innovative, scalable, and secure. Our team of experts continuously researches and implements the latest technologies to ensure our clients stay ahead in the digital world. We believe in long-term partnerships and strive to exceed expectations with every project we undertake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;