/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';


import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Matt Gildner Portfolio',
  description: 'Robotics hardware projects and research',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
