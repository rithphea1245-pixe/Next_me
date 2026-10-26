
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar1 } from "@/components/navbar1";
import "./globals.css";
import NavbarComponent from "@/components/NavbarComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Website",
  description: "My Next.js website built with TypeScript",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <NavbarComponent></NavbarComponent>
        {/* Navigation bar */}
        {/* <Navbar1 /> */}

        {/* Current page content */}
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}

