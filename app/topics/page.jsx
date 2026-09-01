"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function TopicsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const departments = [
    { name: "Anatomy", category: "Pre & Para Clinical", topics: "Histological variations, Cadaveric anatomical studies, Morphometric analysis." },
    { name: "Anesthesiology", category: "Clinical", topics: "USG-guided regional nerve blocks, Post-operative analgesia comparison, Airway management protocols." },
    { name: "Biochemistry", category: "Pre & Para Clinical", topics: "Glycated hemoglobin & lipid ratios in metabolic syndrome, Biomarkers in renal injury." },
    { name: "Cardiology", category: "Super Specialty", topics: "Coronary artery disease outcome predictors, PCI vs CABG registry evaluation, Echocardiographic parameters." },
    { name: "Clinical Hematology", category: "Super Specialty", topics: "Bone marrow trephine biopsy findings in pancytopenia, Refractory anemia evaluation." },
    { name: "Clinical Immunology & Rheumatology", category: "Super Specialty", topics: "Biologic therapy in severe Rheumatoid Arthritis, Lupus nephritis markers." },
    { name: "Community Medicine / Public Health", category: "Pre & Para Clinical", topics: "Epidemiological survey of non-communicable diseases, Immunization coverage audit." },
    { name: "Critical Care Medicine", category: "Super Specialty", topics: "Sepsis bundle protocol adherence, Mechanical ventilation weaning indices in ICU." },
    { name: "Dentistry & Endodontics", category: "Dental", topics: "CBCT imaging in root canal morphology, Bioceramic sealer marginal leakage." },
    { name: "Dermatology, Venereology & Leprosy", category: "Clinical", topics: "Dermoscopic findings in Psoriasis vs Lichen Planus, Biologicals in chronic Urticaria." },
    { name: "Emergency Medicine", category: "Clinical", topics: "Point-of-care ultrasound (POCUS) in trauma resuscitation, Triage time optimization." },
    { name: "Endocrinology", category: "Super Specialty", topics: "Continuous glucose monitoring in Type 1 Diabetes, Thyroid nodule Bethesda classification." },
    { name: "Forensic Medicine & Toxicology", category: "Pre & Para Clinical", topics: "Autopsy findings in organophosphate poisoning, Age estimation via osteometry." },
    { name: "General Medicine", category: "Clinical", topics: "Clinical profile & complications of Dengue shock syndrome, Biomarkers in Sepsis." },
    { name: "Geriatrics", category: "Clinical", topics: "Comprehensive geriatric assessment in polypharmacy, Fall risk assessment." },
    { name: "Medical Gastroenterology", category: "Super Specialty", topics: "Non-alcoholic fatty liver disease (NAFLD) fibrosis scoring, Inflammatory bowel disease." },
    { name: "Medical Genetics", category: "Super Specialty", topics: "Karyotyping & Next-generation sequencing in congenital anomalies." },
    { name: "Microbiology", category: "Pre & Para Clinical", topics: "Antimicrobial resistance patterns of ESBL producing Gram-negative bacilli, Biofilm formation." },
    { name: "Neonatology", category: "Super Specialty", topics: "Non-invasive ventilation in preterm respiratory distress syndrome, Neonatal sepsis audit." },
    { name: "Nephrology", category: "Super Specialty", topics: "Diabetic kidney disease progression risk factors, Maintenance hemodialysis complications." },
    { name: "Obstetrics & Gynecology", category: "Surgical", topics: "High-risk pregnancy maternal outcomes, Laparoscopic vs open myomectomy." },
    { name: "Ophthalmology", category: "Surgical", topics: "Optical coherence tomography (OCT) in macular edema, Phacoemulsification astigmatism." },
    { name: "Orthopedic Surgery", category: "Surgical", topics: "Intramedullary nailing vs plating in tibial fractures, Total knee arthroplasty outcomes." },
    { name: "Otorhinolaryngology (ENT)", category: "Surgical", topics: "Endoscopic sinus surgery in chronic rhinosinusitis, Tympanoplasty graft success rate." },
    { name: "Pediatrics", category: "Clinical", topics: "Severe acute malnutrition recovery outcomes, Pediatric septic shock protocols." },
    { name: "Pathology", category: "Pre & Para Clinical", topics: "Immunohistochemical marker expression in breast carcinoma, Fine needle aspiration cytology." },
    { name: "Pharmacology", category: "Pre & Para Clinical", topics: "Adverse drug reaction (ADR) monitoring in tertiary hospital, Pharmacovigilance audit." },
    { name: "Physiology", category: "Pre & Para Clinical", topics: "Autonomic function testing in diabetics, Pulmonary function tests in occupational exposure." },
    { name: "Psychiatry", category: "Clinical", topics: "Cognitive behavioral therapy augmentation in treatment-resistant Depression, Sleep quality." },
    { name: "Radio-diagnosis", category: "Clinical", topics: "Multi-detector CT angiography in stroke, MRI diffusion-weighted imaging in brain lesions." },
    { name: "Respiratory / Pulmonary Medicine", category: "Clinical", topics: "Drug-resistant Tuberculosis treatment outcomes, High-resolution CT patterns in ILD." },
    { name: "Surgical Oncology", category: "Super Specialty", topics: "Sentinel lymph node biopsy in early oral cancer, Cytoreductive surgery in ovarian cancer." },
    { name: "Urology", category: "Super Specialty", topics: "Holmium laser enucleation of prostate (HoLEP) vs TURP, Percutaneous nephrolithotomy." }
  ];

  const categories = ["All", "Clinical", "Super Specialty", "Surgical", "Pre & Para Clinical", "Dental"];

  const filteredDepts = departments.filter(d => {
    const matchesCat = selectedCat === "All" || d.category === selectedCat;
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) || d.topics.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E3192] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            NMC Recognized Specialties
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
            40+ Medical Specialties & <span className="text-[#2E3192]">Thesis Topics</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Area of interest for Thesis, Paper writing, editing & publication in relevant indexed journals according to New NMC Guidelines (MD/MS/DM/MCh/DNB/Ph.D).
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCat === cat
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
            placeholder="Search department or topic..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-72 px-4 py-2 rounded-xl text-xs border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#2E3192]"
          />
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredDepts.map((dept, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#2E3192] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-extrabold text-slate-900 text-lg">
                    {dept.name}
                  </h3>
                  <span className="bg-blue-50 text-[#2E3192] text-[10px] font-bold px-2.5 py-1 rounded-md border border-blue-200">
                    {dept.category}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  <strong className="text-slate-900">Sample Research Topics:</strong> {dept.topics}
                </p>
              </div>

              <a
                href={`https://wa.me/917991337001?text=Hello%20Manuscriptome,%20I%20need%20assistance%20with%20thesis/paper%20writing%20in%20${encodeURIComponent(dept.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center rounded-xl bg-slate-100 hover:bg-[#2E3192] hover:text-white text-slate-700 font-bold text-xs transition-colors"
              >
                Inquire for {dept.name} →
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center border border-slate-800">
          <h2 className="text-2xl font-extrabold mb-2">
            Don&apos;t See Your Department Listed?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto mb-6">
            We cover all specialized sub-branches of medical, dental, and pharmaceutical sciences. Contact our editorial team for custom topic creation.
          </p>
          <a
            href="https://wa.me/917991337001?text=Hi,%20I%20want%20to%20inquire%20about%20a%20custom%20medical%20specialty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2E3192] hover:bg-[#232569] text-white font-bold text-xs shadow-md transition-all"
          >
            Chat on WhatsApp: 799-133-7001 →
          </a>
        </div>

      </div>
    </div>
  );
}
