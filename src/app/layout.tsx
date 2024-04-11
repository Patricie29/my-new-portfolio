import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patricie Bakosova",
  description: "My creative portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-slate-900 text-slate-100`}>
        <Navbar />

        {children}

        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
