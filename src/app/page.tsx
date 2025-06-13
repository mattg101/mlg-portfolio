/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';


import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-8">
        <Card
          title="Experience"
          description="View my résumé & career milestones"
          href="/resume"
        />
        <Card
          title="Projects"
          description="Selected robotics & hardware builds"
          href="/projects"
        />
        <Card
          title="Publications"
          description="Research papers & technical articles"
          href="/papers"
        />
      </main>
      <Footer />
    </>
  );
}
