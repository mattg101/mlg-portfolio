/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';


export default function Footer() {
  return (
    <footer className="bg-midnight text-lavender py-6 mt-20">
      <div className="max-w-6xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} Matt&nbsp;Gildner&nbsp;•&nbsp;
        <a
          href="mailto:mg@example.com"
          className="hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
