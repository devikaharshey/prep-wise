import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import { Toaster } from "sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-powered interview preparation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} antialiased pattern`}>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
