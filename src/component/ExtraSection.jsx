
import Image from 'next/image';
import React from 'react';
import { FiCheckCircle } from "react-icons/fi";

 const breeds = [
  {
    name: "Shahiwal",
    desc: "Strong body and high-quality meat",
    image:"https://i.ibb.co.com/MDC24mhY/sahi-bull-2.jpg"
  },
  {
    name: "Deshi Kalo Bakri",
    desc: "Large size and higher weight",
    image:"https://i.ibb.co.com/VpWqNX9H/bakri-3.jpg"
  },
  {
    name: "Local Deshi",
    desc: "Adapted to local environment",
    image:"https://i.ibb.co.com/pvzcwhKn/selective-focus-shot-brown-cow-with-rope-around-its-neck.jpg"
  },
  {
    name: "Deshi Dhumba Sheep",
    desc: "Very popular and tasty meat",
    image:"https://i.ibb.co.com/mrKwWJDc/dumba-5jpg.jpg"
  },
  {
    name: "Jamunapari",
    desc: "Large size and good production",
    image:"https://i.ibb.co.com/rfMrkf9T/jamuna-goat-4.jpg"
  },
];

const ExtraSection = () => {
  return (
    <div className=" px-4 py-12 space-y-16 bg-[#ccffcc]">

    <div className='max-w-7xl mx-auto'>
        {/* 🔹 Qurbani Tips Section */}
     <section>
      <h2 className="text-3xl font-bold text-center mb-6">
        Qurbani Tips
      </h2>

      <div className="bg-white shadow-md rounded-2xl p-6 md:p-10">

        <p className="text-lg text-gray-700 mb-6 text-center">
          Choosing the right animal is very important for a valid and meaningful Qurbani.
        </p>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="flex gap-3 bg-[#ccffcc] p-4 rounded-xl">
            <FiCheckCircle className="text-green-700 text-xl mt-1" />
            <p>Choose animals that are active and have bright, clear eyes.</p>
          </div>

          <div className="flex gap-3 bg-[#ccffcc] p-4 rounded-xl">
            <FiCheckCircle className="text-green-700 text-xl mt-1" />
            <p>Make sure the animal meets the minimum age requirement.</p>
          </div>

          <div className="flex gap-3 bg-[#ccffcc] p-4 rounded-xl">
            <FiCheckCircle className="text-green-700 text-xl mt-1" />
            <p>Avoid animals that are weak, sick, or injured.</p>
          </div>

          <div className="flex gap-3 bg-[#ccffcc] p-4 rounded-xl">
            <FiCheckCircle className="text-green-700 text-xl mt-1" />
            <p>Check if the animal is eating properly and behaving normally.</p>
          </div>

          <div className="flex gap-3 bg-[#ccffcc] p-4 rounded-xl md:col-span-2">
            <FiCheckCircle className="text-green-700 text-xl mt-1" />
            <p>Ensure the animal is well-fed with natural food.</p>
          </div>

        </div>

      </div>
    </section>

      {/* 🔹 Top Breeds Section */}
    

<section className="marquee py-10">
  <h2 className="text-3xl font-bold text-center mb-6">
    Top Breeds for Qurbani
  </h2>

  <div className="marquee-content">

    {/* Duplicate items twice for seamless loop */}
    {[...breeds, ...breeds].map((item, index) => (
      <div
        key={index}
        className=" bg-white text-black shadow-md rounded-2xl p-5 min-w-75 mx-3 transition-all duration-700 hover:-translate-y-3 hover:shadow-xl"
      >
       <div className='relative w-full h-56 bg-white'>
         <Image
        src={item.image}
        alt={item.name}
       fill 
        className="object-cover"
        >

        </Image>
       </div>
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p>{item.desc}</p>
        
      </div>
    ))}

  </div>
</section>
      {/* 🔹 Why Choose Us Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6 mt-10">
          Why Choose QurbaniHat
        </h2>

        <div className="bg-white text-black flex justify-center items-center shadow-md rounded-2xl py-10 px-4 mt-10">
          <ul className="flex flex-wrap justify-center items-center gap-4  ">
            <li className='p-3 py-4 bg-[#ccffcc] rounded-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-xl'>Trusted and verified livestock sellers</li>
            <li className='p-3 py-4 bg-[#ccffcc] rounded-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-xl'>Easy and secure booking system</li>
            <li className='p-3 py-4 bg-[#ccffcc] rounded-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-xl'>Detailed information for each animal</li>
            <li className='p-3 py-4 bg-[#ccffcc] rounded-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-xl'>User-friendly and responsive design</li>
            <li className='p-3 py-4 bg-[#ccffcc] rounded-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-xl'>Works smoothly on mobile, tablet, and desktop</li>
            <li className='p-3 py-4 bg-[#ccffcc] rounded-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-xl'>Fast and hassle-free experience</li>
          </ul>
        </div>
      </section>

    </div>
    </div>
  );
};

export default ExtraSection;