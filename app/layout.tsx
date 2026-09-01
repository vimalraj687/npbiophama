import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manuscriptome — Medical Writing, Thesis & Publication Assistance as per NMC Guidelines",
  description:
    "High quality, original medical research writing, PG/MD/MS/DM/MCh/Ph.D thesis assistance, medical statistics, and publication services in indexed journals as per New NMC Guidelines.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}