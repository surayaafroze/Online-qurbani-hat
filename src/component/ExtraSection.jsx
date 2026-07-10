
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
    <div className="px-4 py-16 space-y-24 bg-gradient-to-b from-[#ccffcc] via-[#e6ffe6] to-[#f4faf4] text-gray-800">

      <div className="max-w-7xl mx-auto space-y-24">
        {/* 🔹 Qurbani Tips Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Essential Qurbani Tips
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Choosing the right animal is crucial for a valid, meaningful, and rewarding Qurbani sacrifice.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-xs rounded-3xl p-6 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">

              <div className="flex gap-4 p-5 bg-[#ccffcc]/30 rounded-2xl border border-green-100 hover:shadow-xs transition-all duration-300 hover:scale-101">
                <FiCheckCircle className="text-green-700 text-2xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Active &amp; Alert</h4>
                  <p className="text-sm text-gray-600">Choose animals that are active, stand strong, and have bright, clear eyes.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-[#ccffcc]/30 rounded-2xl border border-green-100 hover:shadow-xs transition-all duration-300 hover:scale-101">
                <FiCheckCircle className="text-green-700 text-2xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Age Requirement</h4>
                  <p className="text-sm text-gray-600">Make sure the animal meets the minimum age requirement (Cows 2 years, Goats 1 year).</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-[#ccffcc]/30 rounded-2xl border border-green-100 hover:shadow-xs transition-all duration-300 hover:scale-101">
                <FiCheckCircle className="text-green-700 text-2xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Healthy Condition</h4>
                  <p className="text-sm text-gray-600">Avoid animals that are visually weak, limping, blind, or suffering from visible illness.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-[#ccffcc]/30 rounded-2xl border border-green-100 hover:shadow-xs transition-all duration-300 hover:scale-101">
                <FiCheckCircle className="text-green-700 text-2xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Normal Feeding Behavior</h4>
                  <p className="text-sm text-gray-600">Ensure the animal is chewing cud, eating naturally, and behaving normally.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-[#ccffcc]/30 rounded-2xl border border-green-100 hover:shadow-xs transition-all duration-300 hover:scale-101 md:col-span-2">
                <FiCheckCircle className="text-green-700 text-2xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Organically Raised</h4>
                  <p className="text-sm text-gray-600">Verify that the animal has been fed natural feed and grass, free from harmful fattening chemicals.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 🔹 Top Breeds Section */}
        <section className="space-y-8 marquee-container overflow-hidden py-4">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Top Breeds for Qurbani
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Explore the most sought-after breeds highly preferred for their health and meat quality.
            </p>
          </div>

          <div className="marquee-content py-4">
            {/* Duplicate items twice for seamless loop */}
            {[...breeds, ...breeds].map((item, index) => (
              <div
                key={index}
                className="group bg-white text-black border border-gray-100 shadow-xs rounded-2xl p-5 min-w-75 mx-3 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative w-full h-52 bg-gray-50 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 tracking-tight">{item.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 Why Choose Us Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why Choose QurbaniHat
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Providing a secure, seamless, and convenient way to select livestock from home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-green-200">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-[#004d00] font-bold text-xl mb-4">✓</span>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Verified Sellers</h3>
              <p className="text-sm text-gray-600">All sellers are thoroughly vetted and registered for verified transactions.</p>
            </div>
            
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-green-200">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-[#004d00] font-bold text-xl mb-4">✓</span>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Secure Booking</h3>
              <p className="text-sm text-gray-600">Simple, secure booking portal designed for absolute peace of mind.</p>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-green-200">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-[#004d00] font-bold text-xl mb-4">✓</span>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Comprehensive Profiles</h3>
              <p className="text-sm text-gray-600">Access accurate details of each animal including breed, age, and actual weight.</p>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-green-200">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-[#004d00] font-bold text-xl mb-4">✓</span>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Responsive Experience</h3>
              <p className="text-sm text-gray-600">Browse smoothly on any device including desktop, tablet, and mobile screens.</p>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-green-200">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-[#004d00] font-bold text-xl mb-4">✓</span>
              <h3 className="font-bold text-lg text-gray-900 mb-2">No Hidden Costs</h3>
              <p className="text-sm text-gray-600">Transparent pricing models with zero hidden agent fees or overhead costs.</p>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-green-200">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-[#004d00] font-bold text-xl mb-4">✓</span>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Saves Time</h3>
              <p className="text-sm text-gray-600">Skip crowded physical markets and book your sacrificial animal effortlessly from home.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ExtraSection;