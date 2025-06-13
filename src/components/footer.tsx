
export default function Footer() {
  return (
    <footer className="bg-base/80 text-text py-6 mt-20">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Matt Gildner.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="mailto:youremail@example.com" className="hover:text-lava transition">Email</a>
          <a href="https://www.linkedin.com/in/mattgildner" className="hover:text-lava transition">LinkedIn</a>
          <a href="https://github.com/mattg101" className="hover:text-lava transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
