/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';


import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Card({ title, description, href }) {
  const card = (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 10px 20px rgba(0,0,0,0.4)' }}
      className="rounded-lg p-6 border border-lavender/20 bg-midnight text-lavender transition"
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-base">{description}</p>
    </motion.div>
  );
  return href ? <Link href={href}>{card}</Link> : card;
}
