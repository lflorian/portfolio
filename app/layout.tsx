import type { Metadata } from "next";
import "./globals.css";

import { Header } from "./sections/Header";
import { Footer } from "./sections/Footer";

export const metadata: Metadata = {
  title: "portfolio | florianlammert",
  description: "Learn more about my work and projects.",
  icons: {
    icon: '/favicon.png',
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
        </main>
        <Footer />
      </body>
    </html>
  );
}
