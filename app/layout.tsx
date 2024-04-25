import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Figures from "@/components/Figures";
import Detailcards from "@/components/Detailcards";
import Detailcards2 from "@/components/Detailcards2";
import Clients from "@/components/Clients";
import Clients2 from "@/components/Clients2";
import Subscribe from "@/components/Subscribe";
import BeforeFooter from "@/components/BeforeFooter";

export const metadata: Metadata = {
  title: "Let's Trade",
  description: "trading app for traders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="gridlines mobile">
        <Navbar/>
        <Hero/>
        <Figures/>
        <Detailcards/>
        <Detailcards2/>
        <Clients/>
        <Clients2/>
        <Subscribe/>
        <BeforeFooter/>
        <main className="flex-2">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
