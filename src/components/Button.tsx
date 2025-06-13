
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link href={href} legacyBehavior>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-6 py-3 bg-lava text-base font-semibold text-background rounded-lg shadow-lg hover:bg-lava/90 transition"
      >
        {children}
      </motion.a>
    </Link>
  );
}
