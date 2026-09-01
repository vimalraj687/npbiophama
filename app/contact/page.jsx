"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E3192] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Contact Manuscriptome
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
            Get in Touch with Our <span className="text-[#2E3192]">Scientific Editors</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Feel free to call or WhatsApp us anytime. Manuscript preparation and journal selection guidance is <strong>Charge-Free</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone & WhatsApp Card */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2E3192] flex items-center justify-center text-xl mb-4 border border-blue-100">
                📱
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl mb-1">
                Mobile & WhatsApp
              </h3>
              <p className="text-xs text-slate-500 mb-3">Available 24/7 for urgent thesis or paper queries</p>
              <a
                href="tel:+917991337001"
                className="text-lg font-black text-[#2E3192] hover:underline block"
              >
                +91 799-133-7001
              </a>
              <div className="mt-4">
                <a
                  href="https://wa.me/917991337001?text=Hello%20Manuscriptome,%20I%20want%20to%20inquire%20about%20medical%20writing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2E3192] hover:bg-[#232569] text-white font-bold text-xs shadow-md transition-all"
                >
                  Chat Immediately on WhatsApp →
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2E3192] flex items-center justify-center text-xl mb-4 border border-blue-100">
                ✉️
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl mb-1">
                Email Address
              </h3>
              <p className="text-xs text-slate-500 mb-3">Send your manuscript drafts, raw data, or synopses</p>
              <a
                href="mailto:manuscriptome@gmail.com"
                className="text-base font-bold text-[#2E3192] hover:underline block"
              >
                manuscriptome@gmail.com
              </a>
            </div>

            {/* Branch Offices & Compliance */}
            <div className="bg-slate-900 text-white p-7 rounded-3xl border border-slate-800 space-y-3 text-xs">
              <h4 className="font-extrabold text-amber-400 text-sm uppercase tracking-wider">
                Branch Offices & Support Network
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Our scientific writing and biostatistical editors operate across Lucknow, Kanpur, Delhi NCR, and Central India, assisting medical research scholars nationwide.
              </p>
              <div className="pt-2 border-t border-slate-800 text-slate-400">
                ✓ Privacy Guarantee: Raw patient data and hospital records remain 100% confidential.
              </div>
            </div>

          </div>

          {/* Consultation Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
              Send Your Inquiry
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Fill out the details below and our senior editor will get back to you shortly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-[#2E3192] text-center space-y-2">
                <div className="text-3xl">🎉</div>
                <h3 className="font-extrabold text-lg">Thank You!</h3>
                <p className="text-xs text-slate-700">
                  Your message has been received. Our team will contact you via WhatsApp/Phone within a few hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Full Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2E3192]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 7991337001"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2E3192]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="doctor@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2E3192]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Medical Department / Specialty *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. General Medicine, Orthopedics..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2E3192]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Required Service *</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2E3192]">
                    <option>MD/MS Research Paper Writing & Publication</option>
                    <option>Systematic Review & Meta-Analysis</option>
                    <option>PG / MD / MS / DM / MCh Thesis Writing</option>
                    <option>Medical Statistics & SPSS Analysis</option>
                    <option>Book Writing & Publication with ISBN</option>
                    <option>Project / Grant Proposal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your study title, deadline, or data available..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#2E3192]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#2E3192] hover:bg-[#232569] text-white font-bold text-xs shadow-md transition-all active:scale-95"
                >
                  Submit Inquiry Now →
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Privacy Policy & Disclaimer Banner */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 text-slate-600 text-xs leading-relaxed space-y-3">
          <h3 className="font-extrabold text-slate-900 text-sm">
            Privacy Policy & Disclaimer:
          </h3>
          <p>
            <strong>Authorship Responsibility:</strong> Authors wishing to publish research papers and case reports or writing thesis done by us must submit genuine patient treatment and diagnosis reports, including diagnostic imaging, laboratory findings, progress updates, and medical history.
          </p>
          <p>
            <strong>Methods & Integrity:</strong> We examine and interpret data, apply statistical analysis, conduct PubMed literature surveys, organize information scientifically, and structure manuscripts with original data. Authors retain full ethical responsibility for their clinical findings.
          </p>
        </div>

      </div>
    </div>
  );
}
