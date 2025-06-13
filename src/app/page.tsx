'use client';

import Navbar from '@/components/navbar';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container mx-auto p-8 sm:p-20 grid sm:grid-cols-2 gap-8">
        <Card title="Experience" description="Detailed case studies of my engineering projects." href="/resume" />
        <Card title="Publications" description="Browse my research papers and diagrams." href="/papers" />
        <Card title="Projects" description="Explore my portfolio projects." href="/projects" />
        <Card title="Get in Touch" description="Contact me for collaborations." href="/contact">
          <Button href="/contact">Contact Me</Button>
        </Card>
      </main>
      <Footer />
    </>
  );
}
