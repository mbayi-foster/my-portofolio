import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
config.autoAddCss = false

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JFK Foster Mbayi - Portfolio",
  description: "Mon portfolio en tant que développeur fullstack web et mobile, mettant en avant mes compétences, expériences et projets réalisés dans le domaine du développement logiciel.",
  icons: {
    icon: "/images/hero-sec/jfk.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
