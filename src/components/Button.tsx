'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
  const router = useRouter();
  return (
    <motion.button
      onClick={() => router.push(href)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block px-6 py-3 bg-lava text-base font-semibold text-background rounded-lg shadow-lg hover:bg-lava/90 transition"
    >
      {children}
    </motion.button>
  );
}
