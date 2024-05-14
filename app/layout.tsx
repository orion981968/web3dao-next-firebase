// app/layout.tsx

import React from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web3 Dao Agency",
  description:
    "A range of services to help businesses build innovative web solutions that engage customers and drive growth.",
  manifest: "/manifest.json",
  icons: ["/favicon.ico"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-slate-100 dark:bg-slate-900">
        {" "}
        <div>{children}</div>
      </body>
    </html>
  );
}
