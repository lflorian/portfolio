import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "./sections/Header";

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: "florian lammert | portfolio",
  description: "Learn more about my work and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(montserrat.variable, montserrat.className, "bg-white text-gray-900 antialiased")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
