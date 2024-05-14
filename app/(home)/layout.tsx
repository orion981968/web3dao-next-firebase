// app/(home)/layout.tsx
"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/shared/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class">
      <div>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
