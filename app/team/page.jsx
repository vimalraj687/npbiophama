"use client";

import React from "react";
import Link from "next/link";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Navneet Kumar",
      title: "Scientific Editor & Writer",
      specialty: "Toxicologist & Oncologist",
      experience: "12+ Years Experience",
      image: "/editors/dr-navneet.png",
      bio: "Former Researcher at Central Drug Research Institute (CDRI), Lucknow. Science and Engineering Research Board-National Post-Doctoral Fellow (SERB-NPDF), IIT Kanpur.",
      reviewRoles: [
        "Food and Chemical Toxicology",
        "PLOS ONE",
        "Current Stem Cell Research & Therapy",
        "Current Cancer Therapy Reviews",
        "Journal of Clinical and Diagnostic Research (JCDR)",
        "Anti-Cancer Agents in Medicinal Chemistry"
      ],
      publications: "Published more than 20 original scientific articles in high impact journals including WIREs RNA (IF: 9.35), Oxidative Medicine and Cellular Longevity (IF: 7.31), Scientific Reports (IF: 4.99), Expert Review of Anticancer Therapy (IF: 3.62), Mini-Reviews in Medicinal Chemistry (IF: 3.73), and Journal of Chromatography B (IF: 3.31).",
      books: "Published 17 full-length books in the field of medicine in multiple languages (English, Portuguese, Italian, French, German, Polish). Helped hundreds of PG residents in synopses, thesis, and research papers."
    },
    {
      name: "Dr. Pravesh Verma",
      title: "Scientific Editor & Writer",
      specialty: "Ex-Assistant Professor of Biochemistry",
      experience: "Biochemistry & Immunology Specialist",
      image: "/editors/dr-pravesh.png",
      bio: "Former Researcher at Central Drug Research Institute (CDRI), Lucknow. Dr. Pravesh Verma comes at first position in Google search based on his previous research work in drug design and biochemistry.",
      memberships: [
        "Life Member of 'Mumbai Immunology Group (MIG)'",
        "Life Member of 'National Congress of Parasitology'",
        "Life Member of 'National Academy of Vector Borne Diseases'",
        "Life Member of 'Society of Biological Chemists, India'",
        "Life Member of 'The Indian Science Congress Association'"
      ],
      publications: "Published many original scientific research papers in top-tier journals such as The European Journal of Medicinal Chemistry (IF: 7.1), International Journal of Biological Macromolecules (IF: 8.02), RSC Advances (IF: 4.03), and EXCLI Journal (IF: 4.06). Reported multiple lead molecules for drug designing."
    },
    {
      name: "Dr. Rahul Sachan",
      title: "Medical Statistician & Data Analyst",
      specialty: "Biostatistics & Clinical Trial Design",
      experience: "7+ Years Experience",
      image: "/editors/dr-rahul.png",
      bio: "M.Sc in Mathematics from IIT Madras. Ph.D. in Medical Statistics from Central University of Punjab. Applies specialized statistical techniques to medical and healthcare research.",
      skills: [
        "Study Design & Sample Size Calculation",
        "SPSS Data Analysis & Master Chart Preparation",
        "GraphPad Prism Publication Quality Figures",
        "MATLAB & R Statistical Modeling",
        "OpenEpi & STATA Clinical Trial Evaluation"
      ],
      publications: "Provides critical statistical support in study design, data collection, statistical analysis, p-value calculations, regression modeling, and interpretation for evidence-based medical decisions."
    },
    {
      name: "Dr. Vinay Yadav",
      title: "Scientific Editor",
      specialty: "Next-Generation Sequencing (NGS) & Oncology Expert",
      experience: "10+ Years Experience",
      image: "/editors/dr-vinay.png",
      bio: "Former Researcher at Indian Institute of Toxicology Research (IITR) Lucknow, Academy of Scientific and Innovative Research (AcSIR), Biotech Park Lucknow, and IIT Delhi.",
      awards: [
        "Awarded Fellow by Indian Council of Medical Research (ICMR)",
        "Awarded Fellow by Council of Scientific and Industrial Research (CSIR)",
        "Worked on ICMR Project: Polymorphism in drug metabolizing enzymes influencing susceptibility to head & neck cancer"
      ],
      publications: "Selected publications in Wiley Environmental and Molecular Mutagenesis (IF: 3.6), Genomics (IF: 6.2), and Biomarkers (IF: 2.07). Has supported over 500+ research scholars to complete their medical research and thesis."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E3192] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Writing & Editing Team
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#142d53] mt-4 mb-4">
            Brief Profile of <span className="text-[#2E3192]">Senior Editors</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Our team comprises toxicologists, oncologists, biostatisticians, and former researchers from CDRI Lucknow, IIT Kanpur, IIT Delhi, and Central Universities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="space-y-12 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Photo Column */}
              <div className="lg:col-span-3 flex flex-col items-center text-center">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl object-cover border-4 border-[#2E3192]/20 shadow-xl"
                  />
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#ce1836] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Bio & Details Column */}
              <div className="lg:col-span-9 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142d53]">
                      {member.name}
                    </h2>
                    <p className="text-[#2E3192] font-bold text-sm sm:text-base mt-0.5">
                      {member.title} • <span className="text-slate-600 font-medium">{member.specialty}</span>
                    </p>
                  </div>
                </div>

                <p className="font-medium text-slate-800 text-sm leading-relaxed">{member.bio}</p>

                {member.reviewRoles && (
                  <div>
                    <h3 className="text-xs font-bold text-[#142d53] uppercase tracking-wider mb-2">
                      Journal Peer Reviewer Roles:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.reviewRoles.map((role, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-lg">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {member.memberships && (
                  <div>
                    <h3 className="text-xs font-bold text-[#142d53] uppercase tracking-wider mb-2">
                      Professional Memberships:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 font-medium">
                      {member.memberships.map((m, idx) => (
                        <li key={idx}>✓ {m}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.skills && (
                  <div>
                    <h3 className="text-xs font-bold text-[#142d53] uppercase tracking-wider mb-2">
                      Key Statistical Capabilities:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((s, idx) => (
                        <span key={idx} className="bg-blue-50 text-[#2E3192] border border-blue-200 text-xs font-bold px-3 py-1 rounded-lg">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {member.awards && (
                  <div>
                    <h3 className="text-xs font-bold text-[#142d53] uppercase tracking-wider mb-2">
                      Fellowships & Awards:
                    </h3>
                    <ul className="space-y-1 text-xs text-slate-700 font-medium">
                      {member.awards.map((a, idx) => (
                        <li key={idx}>🏆 {a}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900">Publications & Impact:</strong> {member.publications}
                </p>

                {member.books && (
                  <p className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900">Books & Scholarly Works:</strong> {member.books}
                  </p>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#142d53] text-white rounded-3xl p-8 sm:p-12 text-center border border-blue-900">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Want Our Senior Editors to Assist Your Research?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Get personalized guidance for thesis writing, synopsis protocol, and journal paper publication.
          </p>
          <a
            href="https://wa.me/917991337001?text=Hello%20Manuscriptome%20Editors,%20I%20need%20assistance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2E3192] hover:bg-[#232569] text-white font-bold text-sm shadow-lg transition-all"
          >
            Connect via WhatsApp: 799-133-7001 →
          </a>
        </div>

      </div>
    </div>
  );
}
