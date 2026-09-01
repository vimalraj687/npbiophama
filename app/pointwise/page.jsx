"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PointwisePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTopic, setActiveTopic] = useState("all");

  const topics = [
    {
      id: "components",
      title: "Key Components of Medical Thesis Writing",
      category: "Thesis Essentials",
      summary: "Overview of all 10 structural parts of a medical dissertation.",
      points: [
        "1. Title Page: Includes title, author, guide, co-guide, department, and institution.",
        "2. Abstract: Concise summary of background, objectives, methods, results, and conclusion.",
        "3. Introduction: Defines the research problem, global burden, and rationale.",
        "4. Literature Review: Summarizes existing literature, pathophysiology, and knowledge gaps.",
        "5. Aims & Objectives: Clearly states primary and secondary measurable goals.",
        "6. Materials & Methods: Describes study setting, design, sampling, tools, and statistics.",
        "7. Results: Objective presentation of data in structured tables, graphs, and figures.",
        "8. Discussion: Interprets findings and compares with published global/Indian studies.",
        "9. Conclusion & Recommendations: Highlights core outcomes, limitations, and future scope.",
        "10. References & Annexures: Vancouver citations, IEC clearance, consent forms, and master chart."
      ]
    },
    {
      id: "title-selection",
      title: "How to Choose a Title for a Medical Thesis",
      category: "Thesis Essentials",
      summary: "Guidelines for crafting a clear, indexable title under 15 words.",
      points: [
        "1. Clarity: Ensure the title clearly reflects the research focus and avoids ambiguity.",
        "2. Conciseness: Keep it brief — ideally under 15 words.",
        "3. Keywords: Include relevant MeSH terms for indexing and search visibility.",
        "4. Relevance: Directly reflect the study's objectives, methods, and target patient population.",
        "5. Tone: Maintain a formal, academic scientific tone; avoid jargon or colloquialism.",
        "6. Study Design: Indicate design where appropriate (e.g., randomized controlled trial, prospective cohort).",
        "7. Avoid Redundancy: Skip unnecessary phrases like 'A Study on...' or 'An Analysis of...'.",
        "8. Simplicity: Use familiar scientific terms, avoid uncommon abbreviations.",
        "9. Institutional Compliance: Follow specific guidelines mandated by your university/NMC."
      ]
    },
    {
      id: "synopsis-protocol",
      title: "How to Make Synopsis / Protocol for Medical Thesis",
      category: "Thesis Essentials",
      summary: "Step-by-step framework for submitting protocol to IEC.",
      points: [
        "1. Title: Clear, concise, and reflective of the core clinical objective.",
        "2. Introduction & Need: Briefly state background and clinical rationale.",
        "3. Review of Literature: Summarize key previous works and state the research gap.",
        "4. Aims and Objectives: Formulate primary and secondary measurable goals.",
        "5. Materials and Methods: Detail study design, setting, sample size formula, inclusion/exclusion criteria.",
        "6. Expected Results & Significance: Mention potential clinical impact.",
        "7. Ethical Considerations: IEC approval protocol, patient consent form in regional language.",
        "8. References: Vancouver style citations.",
        "9. Timeline & Gantt Chart: Work schedule over the 2-3 year residency period."
      ]
    },
    {
      id: "research-question",
      title: "What is a Research Question (PICOT Model)",
      category: "Study Design",
      summary: "Framing research queries using PICOT methodology.",
      points: [
        "1. Definition: The central query your study seeks to investigate and answer.",
        "2. Purpose: Defines the direction, boundaries, and methodology of your work.",
        "3. Clarity: Must be specific, measurable, and clinically applicable.",
        "4. PICOT Framework:",
        "   - P: Population / Patient group (e.g., adult diabetics with HbA1c > 8%)",
        "   - I: Intervention / Exposure (e.g., SGLT2 inhibitor therapy)",
        "   - C: Comparison / Control (e.g., standard metformin monotherapy)",
        "   - O: Outcome (e.g., reduction in 24-hr proteinuria & HbA1c at 6 months)",
        "   - T: Time frame (e.g., 6 months follow-up)",
        "5. Significance: Prevents broad vague questions and ensures valid statistical testing."
      ]
    },
    {
      id: "sample-size",
      title: "Sample Size Calculation in Medical Thesis",
      category: "Biostatistics",
      summary: "Statistical validity, power, and software tools.",
      points: [
        "1. Definition: Number of study participants needed to detect a statistically significant difference.",
        "2. Importance: Ensures statistical validity, reliability, and generalizability while avoiding underpowered studies.",
        "3. Too Small Sample: Leads to Type II errors (failing to detect real effect).",
        "4. Too Large Sample: Unethical exposure of subjects and waste of resources.",
        "5. Key Parameters: Type I error rate (alpha = 0.05), Statistical Power (1-beta = 0.80 or 80%), Expected Effect Size, and Standard Deviation.",
        "6. Recommended Tools: OpenEpi, G*Power, SPSS, STATA, and R.",
        "7. Consultation: Always consult a biostatistician prior to clinical trial initiation."
      ]
    },
    {
      id: "abstract-writing",
      title: "How to Write an Abstract for Medical Research",
      category: "Manuscript Writing",
      summary: "Structuring 150-250 word abstracts for journals and thesis.",
      points: [
        "1. Structured Abstract Sections: Background/Objectives, Methods, Results (with p-values & numbers), and Conclusion.",
        "2. Unstructured Abstract: Single flow paragraph required by specific journals.",
        "3. Length: Strictly 150 to 250 words.",
        "4. Keywords: Include 3 to 6 MeSH compliant keywords.",
        "5. Rule: Do not include citations, figures, or undefined abbreviations in the abstract."
      ]
    },
    {
      id: "vancouver-style",
      title: "References & Vancouver Citation Style",
      category: "Manuscript Writing",
      summary: "In-text numbers and reference list formatting.",
      points: [
        "1. In-text Citations: Numbered sequentially in order of appearance using superscript or parentheses e.g. (1) or [1-3].",
        "2. Journal Citation Format: Author(s) surname Initials. Title of article. Abbreviated Journal Name. Year;Volume(Issue):Page numbers.",
        "3. Example: Kumar N, Verma P. Novel therapeutic targets in oncology. Eur J Med Chem. 2023;245:114890.",
        "4. Et al. Rule: List first 6 authors; if more than 6, list first 6 followed by 'et al.'",
        "5. Tools: Manage citations seamlessly using EndNote, Zotero, Mendeley, or RefWorks."
      ]
    },
    {
      id: "master-chart",
      title: "Master Chart Setup in Excel & SPSS",
      category: "Biostatistics",
      summary: "Data organization for medical dissertations.",
      points: [
        "1. Structure: Rows represent individual study subjects/patients; Columns represent variables (demographics, baseline labs, treatment parameters, follow-up outcomes).",
        "2. Data Coding: Use clear numerical coding for categorical data (e.g. Male = 1, Female = 2; Absent = 0, Present = 1). Create a separate Codebook tab.",
        "3. Best Practices: Avoid merged cells, keep variable names short without spaces (e.g. hba1c_baseline), ensure consistent date formats (YYYY-MM-DD).",
        "4. Confidentiality: Anonymize patient identities (use Study ID instead of Patient Name or Hospital Registration Number)."
      ]
    },
    {
      id: "plagiarism-policy",
      title: "Plagiarism Limits & Avoidance Policy",
      category: "Ethics & Integrity",
      summary: "Maintaining originality under 10-15% Turnitin limit.",
      points: [
        "1. Definition: Using another author's text, ideas, or data without explicit citation.",
        "2. Permissible Similarity Index: Most universities & NMC require similarity below 10% to 15% (excluding references and standard protocol methods).",
        "3. Avoidance Techniques: Paraphrase concepts in original wording, synthesis of literature rather than copy-pasting sentences, cite source immediately.",
        "4. Verification Software: Turnitin, iThenticate, Plagiarism Checker X."
      ]
    },
    {
      id: "authorship-icmje",
      title: "ICMJE Authorship Guidelines for Medical Publications",
      category: "Ethics & Integrity",
      summary: "The 4 essential criteria for medical journal co-authorship.",
      points: [
        "1. Criterion 1: Substantial contributions to the conception or design of the work; or acquisition, analysis, or interpretation of data.",
        "2. Criterion 2: Drafting the work or revising it critically for important intellectual content.",
        "3. Criterion 3: Final approval of the version to be published.",
        "4. Criterion 4: Agreement to be accountable for all aspects of the work in ensuring that questions related to integrity are resolved.",
        "5. Note: All 4 criteria MUST be satisfied to qualify for authorship. General supervision, funding acquisition, or routine data collection alone do not justify authorship."
      ]
    },
    {
      id: "systematic-review",
      title: "How to Write a Systematic Review (PRISMA)",
      category: "Manuscript Writing",
      summary: "Gold standard evidence synthesis methodology.",
      points: [
        "1. Protocol Registration: Register protocol on PROSPERO prior to literature extraction.",
        "2. Search Strategy: Comprehensive search across PubMed/MEDLINE, Cochrane Library, EMBASE, and Scopus using Boolean operators (AND, OR).",
        "3. Selection: Two independent reviewers screen titles, abstracts, and full texts according to explicit inclusion/exclusion criteria.",
        "4. PRISMA Flowchart: Record numbers of identified, screened, eligible, and included studies.",
        "5. Quality Assessment: Evaluate Risk of Bias using Cochrane RoB 2.0 tool or ROBINS-I."
      ]
    }
  ];

  const categories = ["all", "Thesis Essentials", "Study Design", "Biostatistics", "Manuscript Writing", "Ethics & Integrity"];

  const filteredTopics = topics.filter((t) => {
    const matchesCategory = activeTopic === "all" || t.category === activeTopic;
    const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase()) || t.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E3192] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Manuscriptome Pointwise
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 mb-4">
            Medical Writing & <span className="text-[#2E3192]">Thesis Knowledge Base</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Pointwise structured guides covering thesis components, title selection, sample size calculation, Vancouver style, master chart, plagiarism limits, and ICMJE authorship rules.
          </p>
        </div>

        {/* Filter & Search Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTopic(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTopic === cat
                    ? "bg-[#2E3192] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat === "all" ? "All Categories" : cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search topic or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-72 px-4 py-2 rounded-xl text-xs border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#2E3192]"
          />
        </div>

        {/* Topic Cards List */}
        <div className="space-y-8 mb-16">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-100 pb-4 mb-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {topic.title}
                </h2>
                <span className="self-start sm:self-auto bg-blue-50 text-[#2E3192] text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                  {topic.category}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 mb-4 italic font-medium">
                {topic.summary}
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {topic.points.map((pt, idx) => (
                  <li key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-100 font-medium">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Direct Contact CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Need Expert Assistance with Your Specific Topic?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Our medical editors and biostatisticians are available on call and WhatsApp to assist with your thesis protocol, sample size, or paper formatting.
          </p>
          <a
            href="https://wa.me/917991337001?text=Hello%20Manuscriptome,%20I%20have%20a%20query%20regarding%20Pointwise%20Thesis%20Guidance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2E3192] hover:bg-[#232569] text-white font-bold text-sm shadow-lg transition-all"
          >
            Ask Questions on WhatsApp: 799-133-7001 →
          </a>
        </div>

      </div>
    </div>
  );
}
