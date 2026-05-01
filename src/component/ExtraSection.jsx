import React from 'react';

const ExtraSection = () => {
  return (
    <div className=" px-4 py-12 space-y-16 bg-[#ccffcc]">

    <div className='max-w-7xl mx-auto'>
        {/* 🔹 Qurbani Tips Section */}
      <section className=''>
        <h2 className="text-3xl font-bold text-center mb-6">
          Qurbani Tips
        </h2>

        <div className="text-white shadow-md rounded-2xl p-6 space-y-4  bg-[#458b45]">
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
      <section>
        <h2 className="text-3xl font-bold text-center mb-6 mt-10">
          Top Breeds for Qurbani
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-[#458b45] text-white shadow-md rounded-2xl p-5">
            <h3 className="text-xl font-semibold mb-2">Shahiwal</h3>
            <p>Known for strong body structure and high-quality meat.</p>
          </div>

          <div className="bg-[#458b45] text-white shadow-md rounded-2xl p-5">
            <h3 className="text-xl font-semibold mb-2">Friesian</h3>
            <p>Large in size and popular for higher weight.</p>
          </div>

          <div className="bg-[#458b45] text-white shadow-md rounded-2xl p-5">
            <h3 className="text-xl font-semibold mb-2">Local Deshi</h3>
            <p>Easily available and well-adapted to local conditions.</p>
          </div>

          <div className="bg-[#458b45] text-white shadow-md rounded-2xl p-5">
            <h3 className="text-xl font-semibold mb-2">Black Bengal Goat</h3>
            <p>Very popular in Bangladesh for its tender and tasty meat.</p>
          </div>

          <div className="bg-[#458b45] text-white shadow-md rounded-2xl p-5">
            <h3 className="text-xl font-semibold mb-2">Jamunapari</h3>
            <p>Known for larger size and good meat production.</p>
          </div>

        </div>
      </section>

      {/* 🔹 Why Choose Us Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6 mt-10">
          Why Choose QurbaniHat
        </h2>

        <div className="bg-[#458b45] text-white shadow-md rounded-2xl p-6 mt-10">
          <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
            <li>Trusted and verified livestock sellers</li>
            <li>Easy and secure booking system</li>
            <li>Detailed information for each animal</li>
            <li>User-friendly and responsive design</li>
            <li>Works smoothly on mobile, tablet, and desktop</li>
            <li>Fast and hassle-free experience</li>
          </ul>
        </div>
      </section>

    </div>
    </div>
  );
};

export default ExtraSection;