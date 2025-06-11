// src/components/footer.tsx
'use client';

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 py-4">
      Deployed from1: {process.env.NEXT_PUBLIC_DEPLOY_FROM}
    </footer>
  );
}
