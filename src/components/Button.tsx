
'use client';

import Link from 'next/link';
import { m } from 'framer-motion';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link href={href} passHref>
      <m.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-6 py-3 bg-lava text-background font-semibold rounded-lg shadow-lg hover:bg-lava/90 transition text-base"
      >
        {children}
      </m.a>
    </Link>
  );
}
