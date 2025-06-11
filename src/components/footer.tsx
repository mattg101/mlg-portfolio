'use client';

export default function Footer() {
  const deployFrom = process.env.NEXT_PUBLIC_DEPLOY_FROM ?? "unknown";

  return (
    <footer className="w-full text-center text-sm text-gray-500 py-4 border-t border-gray-200">
      Deployed from: <span className="font-mono">{deployFrom}</span>
    </footer>
  );
}
