'use client'
import Link from "next/link";
import { motion } from "motion/react"
const Banner = () => {
  return (
    <div className="bg-[#ccffcc]  ">
      <div className="relative mx-auto md:pt-20 pt-30 pb-20 overflow-hidden  min-h-[80vh]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1730428331315-71ab1e5af8fa?q=80&w=735&auto=format&fit=crop')",
          }}
        ></div>

        {/* 🔴 Only Overlay (NO BLUR) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
        className="relative z-10 px-3 text-center space-y-6 max-w-5xl mx-auto">
          <h1 className="md:text-4xl text-2xl font-bold text-white leading-snug">
            We provide a variety of healthy and well-raised Qurbani animals that
            are safe, pure, and carefully selected for sacrifice.
          </h1>

          <p className="text-gray-200">
            From small goats to large cows, choose the best animal with confidence.
          </p>

          <div className="flex justify-center items-center gap-4">
          <ul>
            <li className=" bg-[#004d00] text-white font-bold rounded px-5 py-2"> <Link href="/allAnimals" > 
              Browse
            </Link></li>
            
          </ul>

            
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Banner;