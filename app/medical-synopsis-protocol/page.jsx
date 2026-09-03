import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Medical Synopsis Protocol — Coming Soon | Manuscriptome",
  description: "Standardized, NMC-compliant Medical Synopsis Protocol writing and ethical research planning service for MD, MS, DM, MCh, and Ph.D scholars.",
};

export default function MedicalSynopsisProtocolPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#142d53] via-[#2E3192] to-[#232569] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
            </span>
            Coming Soon
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Medical Synopsis Protocol
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-medium">
            Standardized, NMC-compliant protocol drafting & synopsis formulation tailored for MD, MS, DM, MCh, and Ph.D medical researchers.
          </p>
        </div>
      </section>

      {/* Main Coming Soon Content Card */}
      <section className="w-full py-16 px-6 md:px-12 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Announcement Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/80 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2E3192] via-[#ce1836] to-amber-400"></div>

            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2E3192] shadow-inner">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <span className="inline-block bg-blue-100 text-[#2E3192] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Under Active Development
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-[#142d53] mb-4">
              We are crafting a comprehensive Synopsis & Protocol service page!
            </h2>

            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Our team of senior medical writers and clinical research experts is finalizing full protocol writing support, institutional ethics committee (IEC) compliance templates, sample size calculation models, and literature matrix guidelines.
            </p>

            {/* Sneak Peek Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">IEC & Ethics Board Compliance</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Strict adherence to Indian & International medical ethics protocols.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Statistical Sample Size Calculation</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Power analysis & formula-backed sample size estimation.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Hypothesis & Objectives Formulating</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Clear primary & secondary outcome parameter definitions.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Review of Literature & Rationale</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Comprehensive PubMed/Scopus reference mapping.</p>
                </div>
              </div>
            </div>

            {/* Immediate Help Box */}
            <div className="bg-gradient-to-r from-blue-900 via-[#142d53] to-[#2E3192] rounded-2xl p-6 md:p-8 text-white text-center shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Need Synopsis & Protocol Support Today?</h3>
              <p className="text-slate-200 text-sm md:text-base max-w-xl mx-auto mb-6">
                You don't have to wait! Our experts are actively taking custom medical synopsis and research protocol assignments right now.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/917991337001?text=Hi%2C%20I%20need%20immediate%20assistance%20with%20Medical%20Synopsis%20Protocol."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-full shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+917991337001"
                  className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm rounded-full shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call +91 799-133-7001
                </a>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-full border border-white/30 backdrop-blur-sm transition-all"
                >
                  Submit Inquiry Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
