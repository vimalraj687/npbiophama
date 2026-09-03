"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchSpecialty, setSearchSpecialty] = useState("");

  // 40+ Specialties categorized
  const specialties = [
    { name: "Anatomy", category: "Pre & Para Clinical" },
    { name: "Anesthesiology", category: "Clinical" },
    { name: "Biochemistry", category: "Pre & Para Clinical" },
    { name: "Cardiology", category: "Super Specialty" },
    { name: "Clinical Hematology", category: "Super Specialty" },
    { name: "Clinical Immunology & Rheumatology", category: "Super Specialty" },
    { name: "Clinical Parasitology", category: "Pre & Para Clinical" },
    { name: "Community Medicine / Public Health", category: "Pre & Para Clinical" },
    { name: "Critical Care Medicine", category: "Super Specialty" },
    { name: "Dentistry & Endodontics", category: "Dental" },
    { name: "Dermatology, Venereology & Leprosy", category: "Clinical" },
    { name: "Drug Discovery & Clinical Trials", category: "Research" },
    { name: "Emergency Medicine", category: "Clinical" },
    { name: "Endocrinology", category: "Super Specialty" },
    { name: "Family Medicine", category: "Clinical" },
    { name: "Forensic Medicine & Toxicology", category: "Pre & Para Clinical" },
    { name: "General Medicine", category: "Clinical" },
    { name: "Geriatrics", category: "Clinical" },
    { name: "Hepatology", category: "Super Specialty" },
    { name: "Interventional Radiology", category: "Super Specialty" },
    { name: "Medical Gastroenterology", category: "Super Specialty" },
    { name: "Medical Genetics", category: "Super Specialty" },
    { name: "Medical Oncology", category: "Super Specialty" },
    { name: "Microbiology", category: "Pre & Para Clinical" },
    { name: "Neonatology", category: "Super Specialty" },
    { name: "Nephrology", category: "Super Specialty" },
    { name: "Nuclear Medicine", category: "Super Specialty" },
    { name: "Obstetrics & Gynecology", category: "Surgical" },
    { name: "Ophthalmology", category: "Surgical" },
    { name: "Oral Pathology", category: "Dental" },
    { name: "Orthopedic Surgery", category: "Surgical" },
    { name: "Otorhinolaryngology (ENT)", category: "Surgical" },
    { name: "Paediatric Orthopaedics", category: "Super Specialty" },
    { name: "Pediatrics", category: "Clinical" },
    { name: "Pathology", category: "Pre & Para Clinical" },
    { name: "Pharmacology", category: "Pre & Para Clinical" },
    { name: "Physical Medicine & Rehabilitation (PMR)", category: "Clinical" },
    { name: "Physiology", category: "Pre & Para Clinical" },
    { name: "Plastic & Reconstructive Surgery", category: "Super Specialty" },
    { name: "Psychiatry", category: "Clinical" },
    { name: "Pulmonary / Respiratory Medicine", category: "Clinical" },
    { name: "Radiation Oncology", category: "Super Specialty" },
    { name: "Radio-diagnosis", category: "Clinical" },
    { name: "Sports Medicine & Injury", category: "Clinical" },
    { name: "Surgical Oncology", category: "Super Specialty" },
    { name: "Transfusion Medicine", category: "Pre & Para Clinical" },
    { name: "Traumatology & Surgery", category: "Surgical" },
    { name: "Urology", category: "Super Specialty" },
    { name: "Virology", category: "Pre & Para Clinical" }
  ];

  const categories = ["All", "Clinical", "Super Specialty", "Surgical", "Pre & Para Clinical", "Dental"];

  const filteredSpecialties = specialties.filter(spec => {
    const matchesCategory = selectedCategory === "All" || spec.category === selectedCategory;
    const matchesSearch = spec.name.toLowerCase().includes(searchSpecialty.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-slate-50">

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2E3192] text-xs sm:text-sm font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ce1836] animate-pulse"></span>
                High Quality, Original Content at Nominal Charges
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#142d53] leading-tight tracking-tight">
                Scientific Writing & <span className="text-[#2E3192]">Data Interpretation</span> Services
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed font-normal">
                Medical/Clinical Research Editing, Writing & Publication Services as per
                <strong className="text-[#142d53] font-bold"> New NMC Guidelines</strong> (formerly MCI) for MD, MS, DM, MCh, DNB, Ph.D. Scholars & Faculty Promotions.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://wa.me/917991337001?text=Hello%20Manuscriptome,%20I%20need%20assistance%20with%20Medical%20Writing%20or%20Thesis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white bg-[#2E3192] hover:bg-[#232569] rounded-xl shadow-lg shadow-blue-900/25 hover:shadow-xl transition-all duration-200 active:scale-95 gap-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  WhatsApp: 799-133-7001
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white bg-[#2E3192] hover:bg-[#232569] rounded-xl shadow-md transition-all duration-200"
                >
                  View Services List →
                </Link>
              </div>

              {/* Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#2E3192] flex items-center justify-center font-bold">✓</span>
                  NMC Guideline Compliant
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#2E3192] flex items-center justify-center font-bold">✓</span>
                  Scopus & SCI Indexed
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#2E3192] flex items-center justify-center font-bold">✓</span>
                  SPSS & Biostatistics
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#2E3192] flex items-center justify-center font-bold">✓</span>
                  Free Formatting Support
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#2E3192] flex items-center justify-center font-bold">✓</span>
                  Zero Plagiarism (&lt;10%)
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#2E3192] flex items-center justify-center font-bold">✓</span>
                  12+ Years Experience
                </div>
              </div>

            </div>

            {/* Right Hero Feature Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#142d53] text-white rounded-3xl p-8 shadow-2xl border border-blue-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ce1836]/20 rounded-full blur-2xl pointer-events-none"></div>

                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  NMC Regulatory Notice
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">
                  Medical Faculty Appointment & Promotion Norms
                </h3>
                <p className="text-slate-200 text-sm leading-relaxed mb-6">
                  We prepare manuscripts, systematic reviews, and meta-analyses adhering strictly to the Postgraduate Medical Education Board & NMC requirements.
                </p>

                <div className="space-y-3 mb-6">
                  <a
                    href="https://www.nmc.org.in/MCIRest/open/getDocument?path=/Documents/Public/Portal/LatestNews/MER.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#232569] hover:bg-[#2E3192] border border-blue-800 transition-colors text-sm text-amber-300 font-semibold group"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-lg">📄</span>
                      NMC MER Regulations PDF
                    </span>
                    <span className="text-xs text-slate-300 group-hover:text-white">Download ↗</span>
                  </a>

                  <a
                    href="https://www.nmc.org.in/MCIRest/open/getDocument?path=/Documents/Public/Portal/LatestNews/Draft%20regulation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#232569] hover:bg-[#2E3192] border border-blue-800 transition-colors text-sm text-amber-300 font-semibold group"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-lg">📜</span>
                      Draft Regulation Guidelines
                    </span>
                    <span className="text-xs text-slate-300 group-hover:text-white">Download ↗</span>
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-[#2E3192]/60 border border-blue-600/60 text-xs text-blue-100">
                  <p className="font-semibold text-amber-300 mb-1">💡 Free Assistance Offer:</p>
                  Manuscript preparation & journal selection assistance is <strong>Charge-Free</strong>. Feel free to contact our team anytime.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Top Services Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#ce1836] bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Our Core Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142d53] mt-3 mb-4">
              Manuscriptome — OUR TOP SERVICES
            </h2>
            <p className="text-slate-600 text-base">
              Tailored research and publication assistance designed for Postgraduate medical residents, doctorate scholars, and medical faculty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#2E3192] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2E3192] text-white flex items-center justify-center text-xl font-bold mb-5 shadow-md shadow-[#2E3192]/20 group-hover:scale-110 transition-transform">
                  📝
                </div>
                <h3 className="text-xl font-bold text-[#142d53] mb-2 group-hover:text-[#2E3192] transition-colors">
                  MD / MS Research Paper Writing & Publication
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Paper writing and publication in indexed journals (Scopus, SCI, PubMed) strictly aligned with New NMC Guidelines. Original research, literature reviews, and case reports.
                </p>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-4 border-t border-slate-200 font-medium">
                <li>• Title & Abstract structuring</li>
                <li>• Journal selection & peer review support</li>
                <li>• Vancouver referencing format</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#2E3192] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2E3192] text-white flex items-center justify-center text-xl font-bold mb-5 shadow-md shadow-[#2E3192]/20 group-hover:scale-110 transition-transform">
                  🔬
                </div>
                <h3 className="text-xl font-bold text-[#142d53] mb-2 group-hover:text-[#2E3192] transition-colors">
                  Systematic Reviews & Meta-Analyses
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  High-level evidence synthesis following PRISMA norms and PICOT frameworks. Ideal for researchers or authors who do not possess primary raw clinical data.
                </p>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-4 border-t border-slate-200 font-medium">
                <li>• PubMed Central search & data extraction</li>
                <li>• Quality assessment & risk of bias analysis</li>
                <li>• Complete manuscript drafting</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#2E3192] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2E3192] text-white flex items-center justify-center text-xl font-bold mb-5 shadow-md shadow-[#2E3192]/20 group-hover:scale-110 transition-transform">
                  📚
                </div>
                <h3 className="text-xl font-bold text-[#142d53] mb-2 group-hover:text-[#2E3192] transition-colors">
                  PG / MD / MS / DM / MCh / Ph.D. Thesis & Dissertation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Complete dissertation support: topic selection, synopsis/protocol creation, literature review, methodology design, data analysis, discussion, and master chart setup.
                </p>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-4 border-t border-slate-200 font-medium">
                <li>• Protocol & IEC submission aid</li>
                <li>• Exhaustive Review of Literature (RoL)</li>
                <li>• Turnitin / iThenticate plagiarism report</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#2E3192] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2E3192] text-white flex items-center justify-center text-xl font-bold mb-5 shadow-md shadow-[#2E3192]/20 group-hover:scale-110 transition-transform">
                  📊
                </div>
                <h3 className="text-xl font-bold text-[#142d53] mb-2 group-hover:text-[#2E3192] transition-colors">
                  Medical Statistics & Data Interpretation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Expert biostatistical analysis using SPSS, GraphPad Prism, MATLAB, and OpenEpi. Includes sample size calculation, p-value calculation, ANOVA, Chi-square & regression models.
                </p>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-4 border-t border-slate-200 font-medium">
                <li>• Sample size determination</li>
                <li>• Master Chart generation (Excel/SPSS)</li>
                <li>• Statistical charts, tables & graphs</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#2E3192] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2E3192] text-white flex items-center justify-center text-xl font-bold mb-5 shadow-md shadow-[#2E3192]/20 group-hover:scale-110 transition-transform">
                  📖
                </div>
                <h3 className="text-xl font-bold text-[#142d53] mb-2 group-hover:text-[#2E3192] transition-colors">
                  Book Writing & Publication with ISBN
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Full-length medical book drafting, editing, and publishing with registered ISBN numbers in multiple languages (English, French, German, Spanish, Polish).
                </p>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-4 border-t border-slate-200 font-medium">
                <li>• Chapter drafting & formatting</li>
                <li>• ISBN registration & publishing</li>
                <li>• Global distribution assistance</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#2E3192] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2E3192] text-white flex items-center justify-center text-xl font-bold mb-5 shadow-md shadow-[#2E3192]/20 group-hover:scale-110 transition-transform">
                  💡
                </div>
                <h3 className="text-xl font-bold text-[#142d53] mb-2 group-hover:text-[#2E3192] transition-colors">
                  Project & Grant Writing Services
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Professional research grant proposal writing for funding bodies (ICMR, CSIR, DST, SERB, ICAR). Conceptualization, methodology, budget rationale & timeline design.
                </p>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-4 border-t border-slate-200 font-medium">
                <li>• ICMR / CSIR grant format compliance</li>
                <li>• Feasibility & rationale drafting</li>
                <li>• Technical review before submission</li>
              </ul>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2E3192] hover:text-[#232569] bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-xl border border-blue-200 transition-all"
            >
              Explore Full Services List & Details →
            </Link>
          </div>

        </div>
      </section>

      {/* 2.5 Overview Pillars: Medical Thesis, Medical Publication, Medical Book */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Banner Notice */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <p className="text-base sm:text-lg font-bold text-[#142d53]">
              Note: Manuscript preparation and Journal selection Assistance{" "}
              <span className="text-[#ce1836] font-extrabold">(Charge Free)</span>
            </p>
            <p className="text-sm sm:text-base font-semibold text-slate-700">
              Feel free to contact us at{" "}
              <a
                href="tel:+917991337001"
                className="text-[#ce1836] font-extrabold hover:underline"
              >
                799-133-7001
              </a>
            </p>
          </div>

          {/* 3 Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

            {/* Pillar 1: Medical Thesis */}
            <div className="flex flex-col">
              <div className="bg-[#fed7aa]/90 hover:bg-[#fed7aa] border border-orange-200/80 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex-1 flex flex-col justify-center">
                <ul className="space-y-2.5 text-sm sm:text-base font-bold text-[#142d53]">
                  {[
                    "MD/MS/Thesis Writing",
                    "Medical Statistics",
                    "Data Interpretation",
                    "Master Chart",
                    "Abstract",
                    "Paper Presentation",
                    "Synopsis writing",
                    "Thesis Editing",
                    "Poster"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[10px] text-[#142d53] mt-1 shrink-0">■</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <h3 className="text-center text-xl sm:text-2xl font-black text-[#006837] mt-4 tracking-wide">
                Medical Thesis
              </h3>
            </div>

            {/* Pillar 2: Medical Publication */}
            <div className="flex flex-col">
              <div className="bg-[#dbeafe]/90 hover:bg-[#dbeafe] border border-blue-200/80 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex-1 flex flex-col justify-center">
                <ul className="space-y-2.5 text-sm sm:text-base font-bold text-[#142d53]">
                  {[
                    "Research Article",
                    "Review Article",
                    "Systematic Review",
                    "Case studies",
                    "Meta-analysis",
                    "Original Papers",
                    "Medical Statistics",
                    "Editing & Proofreading",
                    "Indexed Journal publication",
                    "Free Guidance"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[10px] text-[#142d53] mt-1 shrink-0">■</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <h3 className="text-center text-xl sm:text-2xl font-black text-[#006837] mt-4 tracking-wide">
                Medical Publication
              </h3>
            </div>

            {/* Pillar 3: Medical Book */}
            <div className="flex flex-col">
              <div className="bg-[#a6433b] hover:bg-[#993b33] border border-red-900/30 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex-1 flex flex-col justify-center text-white">
                <ul className="space-y-2.5 text-sm sm:text-base font-bold text-white">
                  {[
                    "Book writing",
                    "Chapter writing",
                    "Book Publication with ISBN",
                    "Book formatting",
                    "Book cover page designing",
                    "Original figure generation",
                    "Life time royalty on books",
                    "Royalty more than 50% on book selling"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[10px] text-white mt-1 shrink-0">■</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <h3 className="text-center text-xl sm:text-2xl font-black text-[#006837] mt-4 tracking-wide">
                Medical Book
              </h3>
            </div>

          </div>

        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142d53]">
                Why Choose Us
              </h2>
              <ul className="space-y-4">
                {[
                  "We have a team of highly skilled doctorate medical professionals, toxicologists, oncologists & biostatisticians",
                  "We provide high quality articles (SCOPUS, SCI, PubMed Standard) with 100% genuine plagiarism report",
                  "Our team of experts with minimum 10+ years of experience will assist & deliver your project on-time",
                  "Our team will review & check your paper's total quality, technical quality & language before handing it to you",
                  "We arrange direct calls & meetings to clear doubts and provide technical guidance",
                  "We publish research articles in reputed international journals strictly following New NMC Guidelines",
                  "Free Guidance & Assistance for research article editing with publications, proofreading and formatting",
                  "24*7 Direct Enquiry Helpline: +91 799-133-7001"
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-slate-800 text-sm font-semibold leading-relaxed">
                    <span className="flex-shrink-0 mt-0.5 mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="9" stroke="#ce1836" strokeWidth="2" />
                        <path d="M10 8L14 12L10 16" stroke="#ce1836" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#142d53] text-white p-8 rounded-3xl shadow-xl border border-blue-900 space-y-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Our Guarantee
                </span>
                <h3 className="text-2xl font-bold text-white">
                  100% Quality & Timely Delivery
                </h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Manuscriptome ensures that every dissertation, medical thesis, and research paper meets international standards. Our team conducts double-tier reviews prior to final delivery.
                </p>
                <div className="pt-2">
                  <Link
                    href="/why-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ce1836] hover:bg-red-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    Learn More About Why Choose Us →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Editorial & Writing Team with Images */}
      <section className="py-16 md:py-24 bg-[#142d53] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-[#232569] px-3.5 py-1.5 rounded-full border border-blue-800">
              Expert Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">
              Brief Profile of Scientific Editors & Writers
            </h2>
            <p className="text-slate-300 text-base">
              Our team consists of doctorate scientists, toxicologists, oncologists, biostatisticians, and former researchers from CDRI, IIT Kanpur, IIT Delhi, and Central Universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Editor 1: Dr. Navneet Kumar */}
            <div className="bg-[#1e293b]/90 rounded-3xl p-7 border border-blue-900 hover:border-[#4B4FC4] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-5 mb-5 border-b border-blue-900/60 pb-5">
                  <div className="relative shrink-0">
                    <img
                      src="/editors/dr-navneet.png"
                      alt="Dr. Navneet Kumar"
                      className="w-24 h-24 rounded-2xl object-cover border-2 border-amber-400 shadow-xl"
                    />
                    <span className="absolute -bottom-2 -right-2 bg-[#ce1836] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                      12+ Yrs
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Dr. Navneet Kumar</h3>
                    <p className="text-amber-400 text-xs font-bold mt-0.5">Scientific Editor & Writer</p>
                    <p className="text-slate-300 text-xs mt-1">Toxicologist & Oncologist</p>
                  </div>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 mb-4 leading-relaxed">
                  <li>• <strong>Former Researcher:</strong> Central Drug Research Institute (CDRI), Lucknow</li>
                  <li>• <strong>SERB-NPDF:</strong> National Post-Doctoral Fellow, IIT Kanpur</li>
                  <li>• <strong>Reviewer:</strong> <i>Food & Chemical Toxicology, PLOS ONE, JCDR</i></li>
                  <li>• Published 20+ original articles (WIREs RNA IF: 9.35, Oxidative Med IF: 7.31).</li>
                  <li>• Author of 17 full-length books in English, French, German, Polish, Italian.</li>
                </ul>
              </div>
            </div>

            {/* Editor 2: Dr. Pravesh Verma */}
            <div className="bg-[#1e293b]/90 rounded-3xl p-7 border border-blue-900 hover:border-[#4B4FC4] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-5 mb-5 border-b border-blue-900/60 pb-5">
                  <div className="relative shrink-0">
                    <img
                      src="/editors/dr-pravesh.png"
                      alt="Dr. Pravesh Verma"
                      className="w-24 h-24 rounded-2xl object-cover border-2 border-amber-400 shadow-xl"
                    />
                    <span className="absolute -bottom-2 -right-2 bg-[#ce1836] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                      CDRI
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Dr. Pravesh Verma</h3>
                    <p className="text-amber-400 text-xs font-bold mt-0.5">Scientific Editor & Writer</p>
                    <p className="text-slate-300 text-xs mt-1">Ex-Assistant Professor Biochemistry</p>
                  </div>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 mb-4 leading-relaxed">
                  <li>• <strong>Former Researcher:</strong> Central Drug Research Institute (CDRI), Lucknow</li>
                  <li>• <strong>Life Member:</strong> Mumbai Immunology Group (MIG), ISCA</li>
                  <li>• Ranked #1 in Google search for lead molecule drug design research.</li>
                  <li>• Published papers in <i>Eur J Med Chem (IF: 7.1), Int J Biol Macromol (IF: 8.02)</i>.</li>
                </ul>
              </div>
            </div>

            {/* Editor 3: Dr. Rahul Sachan */}
            <div className="bg-[#1e293b]/90 rounded-3xl p-7 border border-blue-900 hover:border-[#4B4FC4] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-5 mb-5 border-b border-blue-900/60 pb-5">
                  <div className="relative shrink-0">
                    <img
                      src="/editors/dr-rahul.png"
                      alt="Dr. Rahul Sachan"
                      className="w-24 h-24 rounded-2xl object-cover border-2 border-amber-400 shadow-xl"
                    />
                    <span className="absolute -bottom-2 -right-2 bg-[#ce1836] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                      IIT Madras
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Dr. Rahul Sachan</h3>
                    <p className="text-amber-400 text-xs font-bold mt-0.5">Medical Statistician</p>
                    <p className="text-slate-300 text-xs mt-1">M.Sc IIT Madras, PhD Punjab</p>
                  </div>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 mb-4 leading-relaxed">
                  <li>• <strong>7+ Years Experience</strong> in Medical Statistical Analysis</li>
                  <li>• Applies statistical methods to clinical trials, p-values & regression.</li>
                  <li>• Expert in SPSS, MATLAB, GraphPad Prism, R, OpenEpi, and STATA.</li>
                </ul>
              </div>
            </div>

            {/* Editor 4: Dr. Vinay Yadav */}
            <div className="bg-[#1e293b]/90 rounded-3xl p-7 border border-blue-900 hover:border-[#4B4FC4] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-5 mb-5 border-b border-blue-900/60 pb-5">
                  <div className="relative shrink-0">
                    <img
                      src="/editors/dr-vinay.png"
                      alt="Dr. Vinay Yadav"
                      className="w-24 h-24 rounded-2xl object-cover border-2 border-amber-400 shadow-xl"
                    />
                    <span className="absolute -bottom-2 -right-2 bg-[#ce1836] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                      ICMR/CSIR
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Dr. Vinay Yadav</h3>
                    <p className="text-amber-400 text-xs font-bold mt-0.5">Scientific Editor</p>
                    <p className="text-slate-300 text-xs mt-1">NGS & Oncology Expert</p>
                  </div>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 mb-4 leading-relaxed">
                  <li>• <strong>Former Researcher:</strong> IITR Lucknow, AcSIR, IIT Delhi</li>
                  <li>• <strong>Awarded Fellow:</strong> ICMR & CSIR Fellowships</li>
                  <li>• Specialized in next-generation sequencing (NGS) & cancer biomarkers.</li>
                  <li>• Publications in <i>Genomics (IF: 6.2), Wiley Environ Mutagenesis (IF: 3.6)</i>.</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#2E3192] hover:bg-[#232569] px-6 py-3 rounded-xl shadow-lg transition-all"
            >
              Learn More About Our Editors & Reviewers →
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Medical Specialties Section (40+ Departments) */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E3192] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              NMC Recognized Departments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142d53] mt-3 mb-4">
              Area of Interest for Thesis, Paper Writing & Publications
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We provide specialized assistance across all PG branches (MD/MS/DM/MCh/DNB/Ph.D.) according to the Postgraduate Medical Education Board of NMC.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${selectedCategory === cat
                    ? "bg-[#2E3192] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder="Search medical department..."
              value={searchSpecialty}
              onChange={(e) => setSearchSpecialty(e.target.value)}
              className="w-full sm:w-64 px-3.5 py-2 rounded-xl text-xs border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#2E3192]"
            />
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filteredSpecialties.map((dept, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-[#2E3192] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <span className="text-xs font-bold text-slate-900 line-clamp-1">
                  {dept.name}
                </span>
                <span className="text-[10px] text-[#2E3192] font-semibold mt-1">
                  {dept.category}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/topics"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#2E3192] hover:underline"
            >
              View complete department guidelines & research topic ideas →
            </Link>
          </div>

        </div>
      </section>

      {/* 6. Manuscriptome Pointwise Preview */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#ce1836] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
                Knowledge Base & Writer&apos;s Guide
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142d53] leading-tight">
                Manuscriptome <span className="text-[#2E3192]">Pointwise</span> Guidelines
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Step-by-step essential components for medical thesis writing, title selection rules, synopsis/protocol design, sample size determination, Vancouver referencing, master chart setup, and avoiding plagiarism.
              </p>

              <div className="space-y-3">
                {[
                  "Key Components of Medical Thesis (Title Page to References)",
                  "How to Choose a Clear & Concise Medical Title (<15 words)",
                  "PICOT Framework & Sample Size Calculation Tools",
                  "Vancouver Referencing Style & Master Chart Excel/SPSS Setup",
                  "Plagiarism policy (<10-15% Turnitin/iThenticate limit)",
                  "ICMJE Authorship Criteria & Peer Review Guidelines"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-[#ce1836] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    {point}
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/pointwise"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-[#2E3192] hover:bg-[#232569] rounded-xl shadow-md transition-all"
                >
                  Read Complete Pointwise Guide →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#142d53] text-white rounded-3xl p-8 border border-blue-900 shadow-xl space-y-6">
                <h3 className="text-lg font-bold text-amber-400 border-b border-blue-800 pb-3">
                  💡 Quick Medical Thesis Checklist
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#232569] border border-blue-800">
                    <h4 className="font-bold text-amber-300 mb-1">1. PICOT Model for Research Question</h4>
                    <p className="text-slate-200">Population, Intervention, Comparison, Outcome, and Time horizon clearly stated.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#232569] border border-blue-800">
                    <h4 className="font-bold text-amber-300 mb-1">2. Sample Size Calculation</h4>
                    <p className="text-slate-200">Calculated using G*Power, OpenEpi, or SPSS with &alpha;=0.05 & power (1-&beta;)=0.80.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#232569] border border-blue-800">
                    <h4 className="font-bold text-amber-300 mb-1">3. Master Chart & Vancouver References</h4>
                    <p className="text-slate-200">Organized rows (participants) and columns (variables) formatted in Vancouver style.</p>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <Link href="/pointwise" className="text-xs text-amber-300 hover:underline font-bold">
                    Explore all 20+ Pointwise Topics →
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. WhatsApp Contact CTA */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center relative overflow-hidden">

            {/* Top color bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2E3192] via-[#25D366] to-[#142d53]"></div>

            {/* WhatsApp icon pulse */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-green-400/40">
                  <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping"></div>
              </div>
            </div>

            {/* Badge */}
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#2E3192] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 mb-3">
              Get In Touch
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142d53] mt-2 mb-3">
              Need Help with Paper, Thesis, or Data Interpretation?
            </h2>

            <p className="text-sm text-slate-500 mb-8 max-w-xl mx-auto leading-relaxed">
              Chat with our medical writing experts directly on WhatsApp. Share your research query, get an instant response, and start your project today — no forms, no waiting!
            </p>

            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/917991337001?text=Hi%2C%20I%20need%20help%20with%20my%20medical%20research%20paper%2F%20thesis.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-base shadow-xl shadow-green-400/30 hover:shadow-green-400/50 transition-all duration-200 hover:-translate-y-1 active:scale-95"
            >
              <svg className="w-6 h-6 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Chat on WhatsApp — +91 799-133-7001
            </a>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="text-xs text-slate-400 font-semibold">OR CALL DIRECTLY</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            {/* Call CTA */}
            <a
              href="tel:+917991337001"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#142d53] hover:bg-[#2E3192] text-white font-bold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: +91 799-133-7001
            </a>

            <p className="text-[11px] text-slate-400 mt-5">
              Available Mon – Sat, 9 AM – 8 PM IST &nbsp;•&nbsp; Typically responds within 10 minutes
            </p>

          </div>
        </div>
      </section>

    </div>
  );
}