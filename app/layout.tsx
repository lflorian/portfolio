import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

import { Header } from "./sections/Header";
import { Footer } from "./sections/Footer";

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: "portfolio | florianlammert",
  description: "Learn more about my work and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(montserrat.variable, montserrat.className, "bg-black text-gray-900 antialiased")}>
        <Header />
        <main className="bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
