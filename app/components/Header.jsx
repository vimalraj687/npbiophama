"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Why Us", href: "/why-us" },
    { name: "Topics", href: "/topics" },
    { name: "International Conference", href: "/conference" },
    { name: "Guarantees", href: "/guarantees" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex justify-between items-center h-24">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-light to-brand flex items-center justify-center shadow-lg shadow-brand/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <span className="font-bold text-3xl tracking-tight text-brand">
              Manuscriptome
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-lg text-gray-600 hover:text-brand font-medium transition-colors">
              Home
            </Link>

            <Link href="/services" className="text-lg text-gray-600 hover:text-brand font-medium transition-colors">
              Services
            </Link>

            <Link href="/why-us" className="text-lg text-gray-600 hover:text-brand font-medium transition-colors">
              Why Us
            </Link>
            <Link href="/topics" className="text-lg text-gray-600 hover:text-brand font-medium transition-colors">
              Topics
            </Link>
            <Link href="/conference" className="text-lg text-gray-600 hover:text-brand font-medium transition-colors">
              International Conference
            </Link>
            <Link href="/guarantees" className="text-lg text-gray-600 hover:text-brand font-medium transition-colors">
              Guarantees
            </Link>
          </nav>

          {/* Contact Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-brand rounded-full hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/30 transition-all duration-200 active:scale-95"
            >
              Contact Us
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white border-t border-gray-100 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-3 text-base font-medium text-gray-700 rounded-lg hover:text-brand hover:bg-brand/5"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/services"
            className="block px-3 py-3 text-base font-medium text-gray-700 rounded-lg hover:text-brand hover:bg-brand/5"
          >
            Services
          </Link>
          <div className="pt-4 pb-2">
            <Link
              href="/contact"
              className="flex w-full items-center justify-center px-4 py-3 text-base font-semibold text-white bg-brand rounded-xl hover:bg-brand-dark"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
