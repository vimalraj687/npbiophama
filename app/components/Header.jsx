"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services List", href: "/services" },
    { name: "Medical Specialties", href: "/topics" },
    { name: "Editorial Team", href: "/team" },
    { name: "Pointwise Guide", href: "/pointwise" },
    { name: "Projects Accomplished", href: "/projects" },
    { name: "Why Us", href: "/why-us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      {/* Top Banner Notice: NMC Guidelines & Direct Contact */}
      <div className="bg-gradient-to-r from-[#142d53] via-[#2E3192] to-[#232569] text-white text-xs py-2 px-4 sm:px-8 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-[#ce1836] text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[10px]">
            New NMC Guidelines
          </span>
          <span className="font-medium text-slate-100">
            We follow strict NMC Norms for Writing & Publication of MD/MS/DM/MCh Articles
          </span>
          <div className="hidden lg:flex items-center gap-3 ml-2 border-l border-blue-800 pl-3">
            <a
              href="https://www.nmc.org.in/MCIRest/open/getDocument?path=/Documents/Public/Portal/LatestNews/MER.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-white underline transition-colors"
            >
              📄 NMC MER Guidelines PDF
            </a>
            <span className="text-blue-300">•</span>
            <a
              href="https://www.nmc.org.in/MCIRest/open/getDocument?path=/Documents/Public/Portal/LatestNews/Draft%20regulation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-white underline transition-colors"
            >
              📜 Medical Faculty Appointment Draft
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 font-semibold">
          <a
            href="tel:+917991337001"
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 799-133-7001
          </a>
          <a
            href="mailto:manuscriptome@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            manuscriptome@gmail.com
          </a>
        </div>
      </div>

      {/* Main Navbar Header */}
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* Logo & Brand Name */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#2E3192] to-[#4B4FC4] flex items-center justify-center shadow-lg shadow-[#2E3192]/30 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight text-[#142d53] group-hover:text-[#2E3192] transition-colors">
                Manuscript<span className="text-[#ce1836]">ome</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                Medical & Clinical Research Support
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? "text-[#2E3192] bg-blue-50 font-bold"
                      : "text-slate-700 hover:text-[#2E3192] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-[#2E3192] hover:bg-[#232569] rounded-full shadow-md shadow-[#2E3192]/25 hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              Contact Us
            </Link>

            {/* Mobile menu button */}
            <button
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 shadow-2xl px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                pathname === link.href
                  ? "text-[#2E3192] bg-blue-50"
                  : "text-slate-700 hover:bg-slate-50 hover:text-[#2E3192]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center px-4 py-3 text-base font-bold text-white bg-[#2E3192] rounded-xl hover:bg-[#232569]"
            >
              Contact Us
            </Link>
            <a
              href="tel:+917991337001"
              className="flex w-full items-center justify-center px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 rounded-xl hover:bg-slate-200"
            >
              Call Us: +91 799-133-7001
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
