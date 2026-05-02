import React from 'react';

 const breeds = [
  {
    name: "Shahiwal",
    desc: "Strong body and high-quality meat",
  },
  {
    name: "Friesian",
    desc: "Large size and higher weight",
  },
  {
    name: "Local Deshi",
    desc: "Adapted to local environment",
  },
  {
    name: "Black Bengal Goat",
    desc: "Very popular and tasty meat",
  },
  {
    name: "Jamunapari",
    desc: "Large size and good production",
  },
];

const ExtraSection = () => {
  return (
    <div className=" px-4 py-12 space-y-16 bg-[#ccffcc]">

    <div className='max-w-7xl mx-auto'>
        {/* 🔹 Qurbani Tips Section */}
      <section className=''>
        <h2 className="text-3xl font-bold text-center mb-6">
          Qurbani Tips
        </h2>

        <div className="text-white shadow-md rounded-2xl p-6 space-y-4  bg-[#458b45] transition-all duration-700 hover:-translate-y-3 hover:shadow-xl">
          <p className='text-[20px]'>
            Choosing the right animal for Qurbani is very important. A healthy and suitable animal ensures that your Qurbani is valid and meaningful. Here are some essential tips:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Choose animals that are active and have bright, clear eyes.</li>
            <li>Make sure the animal meets the minimum age requirement.</li>
            <li>Avoid animals that are weak, sick, or injured.</li>
            <li>Check if the animal is eating properly and behaving normally.</li>
            <li>Ensure the animal is well-fed with natural food.</li>
          </ul>
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
        className="bg-[#458b45] text-white shadow-md rounded-2xl p-5 min-w-75 mx-3 transition-all duration-700 hover:-translate-y-3 hover:shadow-xl"
      >
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

        <div className="bg-[#458b45] text-black flex justify-center items-center shadow-md rounded-2xl py-10 px-4 mt-10">
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