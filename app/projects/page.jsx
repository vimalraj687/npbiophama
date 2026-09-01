"use client";

import React from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Systematic Review & Meta-Analysis in Oncology",
      type: "Systematic Review (PRISMA)",
      journal: "WIREs RNA (Impact Factor: 9.35) & Expert Rev Anticancer Ther (IF: 3.62)",
      desc: "Full literature synthesis and statistical meta-analysis evaluating oncogenic signaling pathways and novel small-molecule target molecules."
    },
    {
      title: "Postgraduate MD Anesthesiology Thesis & Master Chart",
      type: "MD Thesis / Clinical Trial",
      journal: "JCDR & Scopus Indexed Publication",
      desc: "Prospective randomized comparative study on USG-guided nerve blocks vs conventional analgesia. Complete SPSS data analysis & Vancouver references."
    },
    {
      title: "Bio-Markers in Diabetic Nephropathy & Renal Injury",
      type: "Original Research Paper",
      journal: "Oxidative Medicine and Cellular Longevity (Impact Factor: 7.31)",
      desc: "Clinical patient diagnostic dataset interpretation, ROC curve analysis, and manuscript drafting as per New NMC guidelines."
    },
    {
      title: "MS Orthopedic Surgery Dissertation & Publication",
      type: "MS Surgery Thesis",
      journal: "Scopus & PubMed Central",
      desc: "Comparative evaluation of intramedullary interlocking nail vs locking compression plate in distal tibial fractures."
    },
    {
      title: "Full-Length Medical Book Publication with ISBN",
      type: "ISBN Published Book",
      journal: "International Book Publisher",
      desc: "17 full-length medical textbooks edited and published across English, French, German, Polish, and Portuguese languages."
    },
    {
      title: "Drug Metabolizing Enzyme Polymorphism in Head & Neck Cancer",
      type: "ICMR Sponsored Research Paper",
      journal: "Genomics (Impact Factor: 6.2) & Biomarkers (IF: 2.07)",
      desc: "Next-generation sequencing (NGS) data interpretation and statistical gene association modeling."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E3192] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Portfolio & Achievements
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
            Our Recent <span className="text-[#2E3192]">Projects Accomplished</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            A glimpse into successfully published research papers, systematic reviews, dissertations, and ISBN medical books completed by our team.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-[#2E3192] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="bg-blue-50 text-[#2E3192] text-[10px] font-extrabold px-3 py-1 rounded-full border border-blue-200 uppercase tracking-wider">
                  {proj.type}
                </span>
                <h3 className="font-extrabold text-slate-900 text-xl mt-3 mb-2">
                  {proj.title}
                </h3>
                <p className="text-xs font-bold text-amber-600 mb-3">
                  📍 {proj.journal}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {proj.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2E3192]">
                <span>✓ 100% NMC Compliant</span>
                <span>Verified →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Want Your Study Published in High-Impact Journals?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Share your raw clinical records or research idea to begin manuscript preparation today.
          </p>
          <a
            href="https://wa.me/917991337001?text=Hello%20Manuscriptome,%20I%20want%20to%20publish%20my%20recent%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2E3192] hover:bg-[#232569] text-white font-bold text-sm shadow-lg transition-all"
          >
            Submit Project via WhatsApp: 799-133-7001 →
          </a>
        </div>

      </div>
    </div>
  );
}
