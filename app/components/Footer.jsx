import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#142d53] text-slate-300 pt-16 pb-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2E3192] flex items-center justify-center text-white font-bold shadow-lg shadow-[#2E3192]/40">
                M
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                Manuscript<span className="text-[#ce1836]">ome</span>
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Leading Medical & Clinical Research Writing, Thesis Editing & Journal Publication Support Service. We follow strict New NMC Guidelines for MD/MS/DM/MCh & Faculty Publications.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-[#232569] border border-blue-700 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full">
                ✓ 100% NMC Norms Compliant
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-4 border-l-2 border-[#ce1836] pl-3">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">
                  Services List
                </Link>
              </li>
              <li>
                <Link href="/medical-synopsis-protocol" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>Medical Synopsis Protocol</span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/medical-conference-posters" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>Medical Conference Posters</span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/medical-conference-ppt" className="hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>Medical Conference PPT</span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/topics" className="hover:text-amber-400 transition-colors">
                  40+ Medical Specialties
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-amber-400 transition-colors">
                  Writing & Editing Team
                </Link>
              </li>
              <li>
                <Link href="/pointwise" className="hover:text-amber-400 transition-colors">
                  Manuscriptome Pointwise
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-amber-400 transition-colors">
                  Projects Accomplished
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Medical Services */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-4 border-l-2 border-[#ce1836] pl-3">
              Key Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>MD/MS Research Paper Writing & Publication</li>
              <li>Systematic Review & Meta-Analysis</li>
              <li>PG/MD/MS/DM/MCh/Ph.D Thesis Writing</li>
              <li>Medical Statistics & SPSS Data Analysis</li>
              <li>Book Writing & Publication with ISBN</li>
              <li>Grant & Project Proposal Writing</li>
              <li>Free Manuscript & Journal Formatting</li>
            </ul>
          </div>

          {/* Column 4: Direct Contact & Offices */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-4 border-l-2 border-[#ce1836] pl-3">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>
                  <strong>Mobile & WhatsApp:</strong><br />
                  <a href="tel:+917991337001" className="text-amber-300 hover:underline">+91 799-133-7001</a>
                </span>
              </p>
              <p className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>
                  <strong>Email:</strong><br />
                  <a href="mailto:manuscriptome@gmail.com" className="text-amber-300 hover:underline">manuscriptome@gmail.com</a>
                </span>
              </p>
              <p className="flex items-start gap-2.5 text-xs text-slate-300">
                <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>
                  Branch Offices & Scientific Support teams available for medical scholars across India.
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-blue-900 text-xs text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} Manuscriptome. All rights reserved. Medical & Scientific Writing Services.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-amber-400 transition-colors">
              Privacy Policy & Disclaimer
            </Link>
            <span>•</span>
            <a
              href="https://www.nmc.org.in/MCIRest/open/getDocument?path=/Documents/Public/Portal/LatestNews/MER.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              NMC Guidelines
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
