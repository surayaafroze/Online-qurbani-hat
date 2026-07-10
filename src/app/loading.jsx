"use client";

import React from 'react';
import { PuffLoader } from 'react-spinners';
import { motion } from 'motion/react';

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-[#ccffcc]/10 dark:from-zinc-950 dark:to-zinc-900/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center space-y-4"
      >
        <PuffLoader color="#004d00" size={60} />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-sm font-semibold text-[#004d00] dark:text-emerald-400 tracking-wide uppercase"
        >
          Loading Livestock...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loading;