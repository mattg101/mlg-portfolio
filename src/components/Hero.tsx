/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';


import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
      <Image
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
        alt="Mars landscape hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-midnight/70" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Matt&nbsp;Gildner</h1>
        <p className="text-lg md:text-2xl mb-6">
          Robotics Hardware Engineer · NASA&nbsp;JPL
        </p>
        <Button href="/projects">View Projects</Button>
      </motion.div>
    </section>
  );
}
