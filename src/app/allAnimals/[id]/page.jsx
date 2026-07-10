"use client";

import { DetailsLogin } from '@/component/DetailsLogin';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimalsDetails = ({params}) => {
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Resolve params using React.use()
  const unwrappedParams = React.use(params);
  const id = unwrappedParams.id;

  useEffect(() => {
    fetch('https://online-qurbani-hat.vercel.app/data.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(a => a.id == id);
        setAnimal(found);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-[#004d00]"></div>
      </div>
    );
  }

  if (!animal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950 text-gray-800 dark:text-gray-200">
        <h2 className="text-xl font-semibold">Animal not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#ccffcc]/20 dark:from-zinc-950 dark:to-zinc-900/50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center bg-white dark:bg-zinc-900/80 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100 dark:border-zinc-800"
        >
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative w-full h-80 md:h-110 rounded-2xl overflow-hidden shadow-md bg-gray-50 dark:bg-zinc-950"
          >
            <Image
              src={animal.image}
              fill
              className="object-cover"
              alt={animal.name}
              priority
            />
          </motion.div>

          {/* Right Side: Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ccffcc] dark:bg-emerald-950 text-[#004d00] dark:text-emerald-400">
                {animal.type} • {animal.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {animal.name}
              </h2>
              <p className="text-2xl font-black text-[#004d00] dark:text-emerald-400">
                ৳{animal.price}
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base bg-gray-50 dark:bg-zinc-800/40 p-5 rounded-2xl border border-gray-100/50 dark:border-zinc-800">
              {animal.description}
            </p>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 text-sm bg-[#ccffcc]/10 p-5 rounded-2xl border border-green-100 dark:border-zinc-800/30">
              <div className="flex justify-between items-center py-1 border-b border-green-100/20 dark:border-zinc-800/20">
                <span className="text-gray-500 font-medium">Breed</span>
                <span className="font-bold text-gray-900 dark:text-white">{animal.breed}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-green-100/20 dark:border-zinc-800/20">
                <span className="text-gray-500 font-medium">Weight</span>
                <span className="font-bold text-gray-900 dark:text-white">{animal.weight} kg</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-green-100/20 dark:border-zinc-800/20">
                <span className="text-gray-500 font-medium">Location</span>
                <span className="font-bold text-gray-900 dark:text-white">{animal.location}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-green-100/20 dark:border-zinc-800/20">
                <span className="text-gray-500 font-medium">Status</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">Available</span>
              </div>
            </div>

            <div className="pt-2">
              <DetailsLogin />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimalsDetails;