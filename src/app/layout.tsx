import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Kuya's Bakery",
  description: 'Baked with love.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-4 bg-base-200 shadow-md">
          <h1 className="text-xl font-bold">Kuya&#39;s Bakery</h1>
        </header>
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
