import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[24px] row-start-2 items-center sm:items-start text-white">
        <Image
          src="https://www-robotics.jpl.nasa.gov/media/images/MattGildner.max-1000x500.jpg"
          alt="Matt Gildner"
          width={300}
          height={150}
          className="rounded shadow-lg"
        />
        <h1 className="text-4xl font-bold">Welcome to my portfolio</h1>
        <p className="text-lg text-center sm:text-left">Explore selected projects, learn about my background, and connect with me.</p>
        <Link
          href="/about"
          className="mt-4 px-5 py-2 rounded bg-lava text-white font-semibold hover:opacity-90 transition text-sm"
        >
          About Me
        </Link>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-white">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
