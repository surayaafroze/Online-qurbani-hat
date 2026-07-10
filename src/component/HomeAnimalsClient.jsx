"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnimalsCard from './AnimalsCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const HomeAnimalsClient = ({ topAnimals }) => {
  return (
    <div className="bg-gradient-to-b from-[#ccffcc]/30 to-[#ccffcc]/10 pb-16 pt-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-[#004d00] mb-8"
        >
          Featured Qurbani Livestock
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6"
        >
          {topAnimals.map(cows => (
            <motion.div key={cows.id} variants={itemVariants}>
              <AnimalsCard cows={cows} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeAnimalsClient;
