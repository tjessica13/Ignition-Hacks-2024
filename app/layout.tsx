import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {NavBar} from '../components/Components';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VTutor AI",
  description: "A virtual tutor chatbot that teaches you AI with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
