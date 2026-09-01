"use client";

import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E3192] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Manuscriptome Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#142d53] mt-4 mb-4">
            Scientific Writing & <span className="text-[#2E3192]">Publication Services</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            We follow New NMC Guidelines (formerly MCI) for writing, editing & publication of medical research articles, dissertations, and biostatistical analysis.
          </p>
        </div>

        {/* Detailed Services Breakdown */}
        <div className="space-y-12 mb-16">
          
          {/* Service Card 1 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block bg-blue-50 text-[#2E3192] text-xs font-bold px-3 py-1 rounded-md uppercase border border-blue-100">
                Service 01
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142d53]">
                MD / MS Paper Writing & Journal Publication
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Complete paper preparation, editing, and publication in Scopus, SCI, PubMed, and Web of Science indexed journals as per New NMC Guidelines. We assist in defining research objectives, literature review, methodology design, abstract drafting, and addressing reviewer comments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700 pt-2">
                <div className="flex items-center gap-2">✓ Original Scientific Article Drafting</div>
                <div className="flex items-center gap-2">✓ Scopus & SCI Indexed Selection</div>
                <div className="flex items-center gap-2">✓ Plagiarism Report (&lt;10%)</div>
                <div className="flex items-center gap-2">✓ Reviewer Revision Assistance</div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-[#142d53] text-white rounded-2xl p-6 border border-blue-900 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wider mb-2">Free Guidance</h3>
                <p className="text-xs text-slate-200 leading-relaxed mb-4">
                  Manuscript preparation and journal selection guidance is <strong>Charge-Free</strong>. Contact us to discuss your paper target.
                </p>
              </div>
              <a
                href="https://wa.me/917991337001?text=Hi,%20I%20want%20to%20publish%20a%20research%20paper%20as%20per%20NMC%20guidelines"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center rounded-xl bg-[#2E3192] hover:bg-[#232569] text-white font-bold text-xs shadow-md transition-all"
              >
                Inquire on WhatsApp →
              </a>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block bg-blue-50 text-[#2E3192] text-xs font-bold px-3 py-1 rounded-md uppercase border border-blue-100">
                Service 02
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142d53]">
                Systematic Reviews, Meta-Analyses & Case Reports
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                If an author does not have raw patient treatment data, they can request a Systematic Review or Meta-Analysis following PRISMA guidelines and NMC norms. For authors with raw clinical records, we structure rare case reports/series with diagnostic imaging, laboratory findings, and literature comparisons.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700 pt-2">
                <div className="flex items-center gap-2">✓ PRISMA Flow Diagram & PROSPERO</div>
                <div className="flex items-center gap-2">✓ PubMed Central Comprehensive Search</div>
                <div className="flex items-center gap-2">✓ Case Series & Patient History Setup</div>
                <div className="flex items-center gap-2">✓ Risk of Bias Assessment (GRADE)</div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-[#142d53] text-white rounded-2xl p-6 border border-blue-900 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wider mb-2">No Raw Data Required</h3>
                <p className="text-xs text-slate-200 leading-relaxed mb-4">
                  Authors without primary clinical data can publish high-level Systematic Reviews recognized by NMC.
                </p>
              </div>
              <a
                href="https://wa.me/917991337001?text=Hi,%20I%20am%20interested%20in%20Systematic%20Review%20publication"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center rounded-xl bg-[#2E3192] hover:bg-[#232569] text-white font-bold text-xs shadow-md transition-all"
              >
                Get Started →
              </a>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block bg-blue-50 text-[#2E3192] text-xs font-bold px-3 py-1 rounded-md uppercase border border-blue-100">
                Service 03
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142d53]">
                PG / MD / MS / DM / MCh / Ph.D Thesis & Dissertation
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                End-to-end dissertation writing assistance: topic selection, synopsis/protocol creation, exhaustive literature review (RoL), materials & methods, master chart creation, statistical analysis, results, discussion, and Vancouver reference list.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700 pt-2">
                <div className="flex items-center gap-2">✓ IEC Ethical Clearance Protocol</div>
                <div className="flex items-center gap-2">✓ Comprehensive 10-Year Literature Review</div>
                <div className="flex items-center gap-2">✓ Master Chart Excel & SPSS Export</div>
                <div className="flex items-center gap-2">✓ Turnitin Anti-Plagiarism Certification</div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-[#142d53] text-white rounded-2xl p-6 border border-blue-900 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wider mb-2">On-Time Delivery</h3>
                <p className="text-xs text-slate-200 leading-relaxed mb-4">
                  Delivered on strict academic deadlines with complete technical and language quality checks.
                </p>
              </div>
              <a
                href="https://wa.me/917991337001?text=Hi,%20I%20need%20Thesis%20writing%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center rounded-xl bg-[#2E3192] hover:bg-[#232569] text-white font-bold text-xs shadow-md transition-all"
              >
                Inquire Thesis Cost →
              </a>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block bg-blue-50 text-[#2E3192] text-xs font-bold px-3 py-1 rounded-md uppercase border border-blue-100">
                Service 04
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142d53]">
                Medical Statistics & Data Interpretation
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Led by expert medical biostatisticians (M.Sc IIT Madras, PhD Punjab). We apply statistical software including SPSS, GraphPad Prism, MATLAB, OpenEpi, and R to execute sample size calculation, t-tests, Chi-square, ANOVA, Kaplan-Meier survival curves, and regression.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700 pt-2">
                <div className="flex items-center gap-2">✓ Sample size determination</div>
                <div className="flex items-center gap-2">✓ Master Chart generation (Excel/SPSS)</div>
                <div className="flex items-center gap-2">✓ Statistical charts, tables & graphs</div>
                <div className="flex items-center gap-2">✓ Clear Data Interpretation Write-up</div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-[#142d53] text-white rounded-2xl p-6 border border-blue-900 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wider mb-2">Statistical Software</h3>
                <p className="text-xs text-slate-200 leading-relaxed mb-4">
                  SPSS, GraphPad Prism, MATLAB, OpenEpi, R, STATA.
                </p>
              </div>
              <a
                href="https://wa.me/917991337001?text=Hi,%20I%20need%20Medical%20Statistics%20and%20SPSS%20analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center rounded-xl bg-[#2E3192] hover:bg-[#232569] text-white font-bold text-xs shadow-md transition-all"
              >
                Send Data File →
              </a>
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div className="bg-[#142d53] text-white rounded-3xl p-8 sm:p-12 text-center border border-blue-900">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Have Questions About Fees or Process?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Our fees for writing, interpreting, and processing medical articles are very affordable. Call or WhatsApp anytime for immediate discussion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917991337001"
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition-all"
            >
              📞 Call +91 799-133-7001
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#2E3192] hover:bg-[#232569] text-white font-bold text-sm shadow-md transition-all"
            >
              Contact Branch Offices →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
