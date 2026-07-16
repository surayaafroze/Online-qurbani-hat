"use client";

import React, { useState } from "react";
import AnimalsCard from "@/component/AnimalsCard";
import ButtonPage from "@/component/ButtonPage";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      damping: 15, 
      stiffness: 100 
    } 
  }
};

const AllAnimalsClient = ({ animals }) => {
  const [sorting, setSorting] = useState("");

  const sortedAnimals = [...animals];

  if (sorting === "low") {
    sortedAnimals.sort((a, b) => a.price - b.price);
  }

  if (sorting === "high") {
    sortedAnimals.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="pt-8 p-5 bg-gradient-to-b from-white to-[#ccffcc]/10 min-h-screen">
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-6 px-2">
        <h2 className="text-2xl font-extrabold text-[#004d00] tracking-tight">Available Livestock</h2>
        <ButtonPage setSorting={setSorting} />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 max-w-7xl mx-auto pb-12"
      >
        {sortedAnimals.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <AnimalsCard cows={item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AllAnimalsClient;