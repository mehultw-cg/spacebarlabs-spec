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
  title: "🚀 Aurorys Labs | CyberSecurity Services | Secure Private Cloud Architecture & Infrastructure",
  description: "Craft your future with secure, resilient, and efficiently engineered cloud infrastructure. Aurorys Labs specializes in privacy-by-design, high-performance architecture, and DevSecOps Cybersecurity services.",
  keywords: ["CyberSecurity","DevSecOps", "Cloud Architecture", "Edge Computing", "Privacy", "Security", "Infrastructure", "Aurorys Labs", "Cyber Security", "Security Architecture", "Sovereign Systems", "Cloud Migration", "Cloud", "VPS", "Cloud Security"],
  icons: {
    icon: "/logo_1.svg",
    apple: "/logo_1.svg",
  },
  openGraph: {
    title: "Aurorys Labs | CyberSecurity Services | Secure Private Cloud Architecture & Infrastructure",
    description: "Craft your future with secure, resilient, and efficiently engineered cloud infrastructure. Aurorys Labs specializes in privacy-by-design, high-performance architecture, and DevSecOps Cybersecurity services.",
    type: "website",
    url: "https://auroryslabs.com",
    locale: "en_US",
    siteName: "Aurorys Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurorys Labs | CyberSecurity Services | Secure Private Cloud Architecture & Infrastructure",
    description: "Craft your future with secure, resilient, and efficiently engineered cloud infrastructure. Aurorys Labs specializes in privacy-by-design, high-performance architecture, and DevSecOps Cybersecurity services.",
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
