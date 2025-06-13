
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 backdrop-blur bg-base/70 p-4 flex justify-between items-center z-50">
      <Link href="/" className="text-2xl font-bold text-text hover:text-lava transition">
        MattG
      </Link>
      <div className="flex gap-6">
        {['Home','About','Resume','Papers','Projects','Contact'].map((item) => (
          <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-lava transition text-text">
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}
