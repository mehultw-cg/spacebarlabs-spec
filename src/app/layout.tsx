import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🚀 SpaceBar Labs | CyberSecurity Services | Secure Private Cloud Architecture & Infrastructure",
  description: "Craft your future with secure, resilient, and efficiently engineered cloud infrastructure. SpaceBar Labs specializes in privacy-by-design, high-performance architecture, and DevSecOps Cybersecurity services.",
  keywords: ["CyberSecurity","DevSecOps", "Cloud Architecture", "Edge Computing", "Privacy", "Security", "Infrastructure", "SpaceBar Labs", "Cyber Security", "Security Architecture", "Sovereign Systems", "Cloud Migration", "Cloud", "VPS", "Cloud Security"],
  openGraph: {
    title: "SpaceBar Labs | CyberSecurity Services | Secure Private Cloud Architecture & Infrastructure",
    description: "Craft your future with secure, resilient, and efficiently engineered cloud infrastructure. SpaceBar Labs specializes in privacy-by-design, high-performance architecture, and DevSecOps Cybersecurity services.",
    type: "website",
    url: "https://spacebar-labs.com",
    locale: "en_US",
    siteName: "SpaceBar Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceBar Labs | CyberSecurity Services | Secure Private Cloud Architecture & Infrastructure",
    description: "Craft your future with secure, resilient, and efficiently engineered cloud infrastructure. SpaceBar Labs specializes in privacy-by-design, high-performance architecture, and DevSecOps Cybersecurity services.",
  }
};

import { ThemeProvider } from "@/components/global/theme-provider";
import { Navbar } from "@/components/global/navbar";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { BackToTop } from "@/components/ui/back-to-top";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
