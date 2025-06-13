/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';


import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Projects', 'Papers', 'Contact'];

  return (
    <nav className="fixed top-0 w-full backdrop-blur bg-midnight/70 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-lavender">
          MG
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-lavender"
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <ul
          className={`${
            open ? 'block' : 'hidden'
          } md:flex gap-6 text-lavender`}
        >
          {links.map((l) => (
            <li key={l}>
              <Link
                href={l === 'Home' ? '/' : '/' + l.toLowerCase()}
                onClick={() => setOpen(false)}
                className="hover:text-accent transition"
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
