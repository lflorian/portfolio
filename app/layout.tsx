import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import { Header } from "./sections/Header";
import { Footer } from "./sections/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://florianlammert.com'),
  title: {
    default: 'Florian Lammert — Software Developer',
    template: '%s | florianlammert',
  },
  description: 'Portfolio of Florian Lammert — software developer. Explore my projects, blog posts, and get in touch.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Florian Lammert',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-gray-900 antialiased">
        <Header />
        <main className="bg-white">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
