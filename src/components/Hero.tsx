/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="w-full py-20 bg-hero text-background px-8 sm:px-20">
      <motion.h1
        className="text-5xl font-bold mb-4 max-w-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Matt Gildner
      </motion.h1>
      <motion.p
        className="text-xl max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Robotics Hardware Engineer at JPL. Welcome to my professional portfolio.
      </motion.p>
    </section>
  );
}
