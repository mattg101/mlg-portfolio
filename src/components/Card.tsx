/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  href?: string;
  children?: ReactNode;
}

export default function Card({ title, description, href, children }: CardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
      className="border border-gray-700 rounded-lg p-6 bg-base text-text transition"
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-base mb-4">{description}</p>
      {children}
    </motion.div>
  );
  return href ? <Link href={href}>{content}</Link> : content;
}
