/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';


import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Button({ href, children }) {
  return (
    <Link href={href}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-accent text-midnight font-semibold rounded-lg shadow-md hover:bg-accent/90 transition"
      >
        {children}
      </motion.button>
    </Link>
  );
}
