"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutClient = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-[#ccffcc]/10 py-20 px-6 md:px-12 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE - TEXT WITH MOTION */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            About Qurbani <span className="text-[#004d00]">Online Bazar</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            Qurbani Online Bazar is a smart, state-of-the-art platform that helps you search, explore, and book sacrificial animals easily. We eliminate the traditional hassle of visiting crowded physical markets by connecting you with verified, trusted sellers.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            Compare prices, breeds, weights, and locations side-by-side with complete transparency. Our ultimate goal is to make your Qurbani booking simple, fast, secure, and reliable.
          </p>
        </motion.div>

        {/* RIGHT SIDE - FEATURES WITH STAGGERED MOTION */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                ease: "easeOut"
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {[
            { title: "Trusted Sellers", icon: "🐄", desc: "Verified sellers ensuring safe, reliable, and premium livestock." },
            { title: "Fair Prices", icon: "💰", desc: "Completely transparent pricing model with zero hidden fees." },
            { title: "Easy UI", icon: "📱", desc: "User-friendly, mobile-first design with smooth browsing." },
            { title: "Fast Process", icon: "⚡", desc: "Find, verify, and reserve your animal in a matter of minutes." }
          ].map((feat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
              }}
              style={{ willChange: "transform, opacity" }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-6 rounded-2xl shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-xl hover:border-green-200"
            >
              <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                <span>{feat.icon}</span> {feat.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutClient;
