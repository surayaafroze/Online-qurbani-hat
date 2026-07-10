"use client";

import Image from 'next/image';
import React from 'react';
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ExtraSection = () => {
  return (
    <div className="px-4 py-16 space-y-24 bg-gradient-to-b from-[#ccffcc] via-[#e6ffe6] to-[#f4faf4] text-gray-800">

      <div className="max-w-7xl mx-auto space-y-24">
        {/* 🔹 Qurbani Tips Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Essential Qurbani Tips
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Choosing the right animal is crucial for a valid, meaningful, and rewarding Qurbani sacrifice.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-md border border-white/40 shadow-xs rounded-3xl p-6 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Active & Alert", desc: "Choose animals that are active, stand strong, and have bright, clear eyes." },
                { title: "Age Requirement", desc: "Make sure the animal meets the minimum age requirement (Cows 2 years, Goats 1 year)." },
                { title: "Healthy Condition", desc: "Avoid animals that are visually weak, limping, blind, or suffering from visible illness." },
                { title: "Normal Feeding Behavior", desc: "Ensure the animal is chewing cud, eating naturally, and behaving normally." },
              ].map((tip, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-[#ccffcc]/30 rounded-2xl border border-green-100 hover:shadow-xs transition-all duration-300 hover:scale-102">
                  <FiCheckCircle className="text-green-700 text-2xl shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{tip.title}</h4>
                    <p className="text-sm text-gray-600">{tip.desc}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 p-5 bg-[#ccffcc]/30 rounded-2xl border border-green-100 hover:shadow-xs transition-all duration-300 hover:scale-102 md:col-span-2">
                <FiCheckCircle className="text-green-700 text-2xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Organically Raised</h4>
                  <p className="text-sm text-gray-600">Verify that the animal has been fed natural feed and grass, free from harmful fattening chemicals.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 🔹 Top Breeds Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8 marquee-container overflow-hidden py-4"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Top Breeds for Qurbani
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Explore the most sought-after breeds highly preferred for their health and meat quality.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="marquee-content py-4">
            {[...breeds, ...breeds].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group bg-white text-black border border-gray-100 shadow-xs rounded-2xl p-5 min-w-75 mx-3 transition-all duration-500 hover:shadow-xl"
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
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 🔹 Why Choose Us Section */}
        <motion.section 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why Choose QurbaniHat
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Providing a secure, seamless, and convenient way to select livestock from home.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Verified Sellers", desc: "All sellers are thoroughly vetted and registered for verified transactions." },
              { title: "Secure Booking", desc: "Simple, secure booking portal designed for absolute peace of mind." },
              { title: "Comprehensive Profiles", desc: "Access accurate details of each animal including breed, age, and actual weight." },
              { title: "Responsive Experience", desc: "Browse smoothly on any device including desktop, tablet, and mobile screens." },
              { title: "No Hidden Costs", desc: "Transparent pricing models with zero hidden agent fees or overhead costs." },
              { title: "Saves Time", desc: "Skip crowded physical markets and book your sacrificial animal effortlessly from home." }
            ].map((choose, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs transition-all duration-300 hover:shadow-md hover:border-green-200"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-[#004d00] font-bold text-xl mb-4">✓</span>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{choose.title}</h3>
                <p className="text-sm text-gray-600">{choose.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
};

export default ExtraSection;