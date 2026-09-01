"use client";

import React from "react";
import Link from "next/link";

export default function GuaranteesPage() {
  const guarantees = [
    {
      title: "100% New NMC Guidelines Compliance Guarantee",
      desc: "Every research paper, thesis, systematic review, and dissertation strictly follows the Postgraduate Medical Education Board & NMC requirements for MD/MS/DM/MCh degrees and faculty appointments/promotions."
    },
    {
      title: "Anti-Plagiarism & Originality Guarantee (<10%)",
      desc: "All manuscripts are generated from primary literature or provided raw clinical data, verified using Turnitin & iThenticate to guarantee a similarity score strictly under 10% to 15%."
    },
    {
      title: "On-Time Academic Delivery Guarantee",
      desc: "We respect strict university submission deadlines and journal review timelines. We guarantee on-time delivery for all synopsis protocols, master charts, and full thesis drafts."
    },
    {
      title: "Biostatistical Accuracy Guarantee",
      desc: "Calculations, sample size determinations, p-values, and statistical models executed by IIT Madras M.Sc & PhD biostatisticians using SPSS, GraphPad Prism, and R."
    },
    {
      title: "Confidentiality & Non-Disclosure Guarantee",
      desc: "Your raw diagnostic patient reports, hospital records, and personal research data remain 100% protected and confidential under strict non-disclosure policies."
    },
    {
      title: "Charge-Free Manuscript Preparation Guarantee",
      desc: "We offer charge-free manuscript formatting and journal selection guidance for all our registered medical scholars and faculty authors."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E3192] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Our Commitment
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
            Manuscriptome <span className="text-[#2E3192]">Service Guarantees</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            We provide peace of mind for medical residents, doctoral candidates, and medical faculty members through non-compromised scientific standards.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guarantees.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#2E3192] text-white font-extrabold flex items-center justify-center text-sm mb-4 shadow-md shadow-blue-900/20">
                  ✓
                </div>
                <h3 className="font-extrabold text-slate-900 text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Have Questions About Our Guarantees?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Speak directly with our senior scientific editors and biostatisticians.
          </p>
          <a
            href="https://wa.me/917991337001?text=Hello%20Manuscriptome,%20I%20have%20questions%20regarding%20publication%20guarantees"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2E3192] hover:bg-[#232569] text-white font-bold text-sm shadow-lg transition-all"
          >
            WhatsApp Support: 799-133-7001 →
          </a>
        </div>

      </div>
    </div>
  );
}
