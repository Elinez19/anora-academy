import type { Metadata } from "next";
import { ReactNode } from "react";
import { Gantari, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import EmailOptInWrapper from "@/components/EmailOptInWrapper";


const gantari = Gantari({
  variable: "--font-gantari",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Anora-Academy",
  description: "Anora-Academy is a platform for learning and teaching",
};

export default function RootLayout({
  children,
}: {
  children:ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className={`${gantari.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <EmailOptInWrapper />
      </body>
    </html>
  );
}
