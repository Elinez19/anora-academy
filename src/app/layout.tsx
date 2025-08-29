import type { Metadata } from "next";
import { ReactNode } from "react";
import { Gantari, Inter } from "next/font/google";
import "./globals.css";
import { ConditionalHeader, ConditionalFooter } from "@/components/layout/ConditionalLayout";
import EmailOptInWrapper from "@/components/EmailOptInWrapper";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";


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
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${gantari.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConditionalHeader />
          <main>
            {children}
          </main>
          <ConditionalFooter />
          <EmailOptInWrapper />
          <Toaster 
            position="bottom-right"
            duration={4000}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
