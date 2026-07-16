'use client';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children, yOffset = 50, duration = 0.5, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
}
