"use client";

import React from "react";
import Link from "next/link";

export default function WhyUsPage() {
  const reasons = [
    {
      title: "100% NMC Guideline Compliance",
      desc: "We strictly align all research papers, systematic reviews, meta-analyses, and dissertations with the New National Medical Commission (NMC) norms for MD/MS/DM/MCh degrees and Faculty Appointments & Promotions."
    },
    {
      title: "Doctorate Medical Editors & Writers",
      desc: "Our editors include former CDRI researchers, SERB-NPDF IIT Kanpur fellows, toxicologists, oncologists, and biostatisticians with over 12+ years of scientific writing experience and 20+ high-impact publications."
    },
    {
      title: "Scopus, SCI & PubMed Indexing Focus",
      desc: "We guide authors to target reputable international indexed journals e.g. Scopus, Science Citation Index (SCI), PubMed Central, and Web of Science."
    },
    {
      title: "Advanced Biostatistical Analysis",
      desc: "In-house M.Sc IIT Madras & PhD biostatisticians handling SPSS, MATLAB, GraphPad Prism, and R for sample size calculations, p-value determinations, and publication-ready graphs."
    },
    {
      title: "Strict Anti-Plagiarism Guarantee (<10%)",
      desc: "We test every manuscript using Turnitin and iThenticate to ensure original content with similarity scores strictly under 10% to 15%."
    },
    {
      title: "Free Formatting & Journal Selection Guidance",
      desc: "Manuscript preparation, structural formatting, and journal selection assistance are provided charge-free for all clients."
    },
    {
      title: "Confidentiality & Data Security",
      desc: "Complete patient data confidentiality and non-disclosure of medical records or raw diagnostic files submitted for research."
    },
    {
      title: "24/7 Direct Consultation",
      desc: "Direct telephone and WhatsApp support at +91 799-133-7001 to resolve queries, conduct review calls, and track project status."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E3192] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Why Choose Manuscriptome
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
            Academic Excellence & <span className="text-[#2E3192]">Scientific Precision</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Empowering postgraduate medical scholars and faculty members with authentic, high-impact research writing and journal publication support.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#2E3192] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2E3192] border border-blue-100 font-extrabold flex items-center justify-center text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Ready to Start Your Paper or Thesis Project?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Contact us today for nominal charges, charge-free manuscript preparation, and direct consultation with senior medical editors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917991337001?text=Hello%20Manuscriptome,%20I%20want%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#2E3192] hover:bg-[#232569] text-white font-bold text-sm shadow-lg transition-all"
            >
              WhatsApp Consultation: 799-133-7001 →
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all"
            >
              Contact Branch Offices →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
