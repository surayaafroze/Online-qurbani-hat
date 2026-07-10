'use client'
import Link from "next/link";
import { motion } from "motion/react"
import 'animate.css';
const Banner = () => {
  return (
    <div className="bg-[#ccffcc] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative mx-auto md:pt-28 pt-36 pb-24 overflow-hidden min-h-[80vh] flex items-center justify-center"
      >
        {/* Background Image with subtle scale-up animation */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1730428331315-71ab1e5af8fa?q=80&w=735&auto=format&fit=crop')",
          }}
        />

        {/* Premium Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-4 text-center space-y-8 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-5xl text-3xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xs"
          >
            We Provide Healthy &amp; Well-Raised <span className="text-[#ccffcc] font-black">Qurbani Animals</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto font-light drop-shadow-xs"
          >
            From small goats to large cows, choose the best animal with complete confidence and trust. Safe, pure, and carefully selected for sacrifice.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center"
          >
            <Link 
              href="/allAnimals" 
              className="px-8 py-3.5 bg-[#004d00] hover:bg-[#006600] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-green-950/20 active:scale-95 transition-all duration-300 transform"
            >
              Browse Animals
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;