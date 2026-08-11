import React from 'react';
import Link from 'next/link';

const Conference = () => {
  const services = [
    {
      title: "Conference Paper Writing",
      desc: "Our experts craft compelling research papers tailored precisely to the guidelines of top-tier international conferences.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "Proceedings Publication",
      desc: "We ensure your work gets published in reputed conference proceedings like IEEE, Springer, and Scopus-indexed journals.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Presentation & Slide Prep",
      desc: "Get professionally designed slide decks and expert coaching to present your research confidently on a global stage.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Registration Assistance",
      desc: "We provide end-to-end support for conference selection, submission, and registration processes.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.95 11.95 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col font-sans">

      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#142d53] to-brand z-0"></div>
        {/* Subtle background overlay pattern */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-md">
            International Conferences
          </h1>
          <p className="text-lg md:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
            Elevate your academic profile. We help you publish and present your groundbreaking research at globally recognized conferences.
          </p>
        </div>
      </section>

      {/* Intro / Value Proposition */}
      <section className="w-full py-16 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="border-[3px] border-brand rounded-sm p-4 relative bg-white min-h-[400px] flex items-center justify-center shadow-lg">
              {/* Fallback for Image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-0 bg-gray-50">
                <svg className="mx-auto h-12 w-12 text-brand mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                </svg>
                <p className="text-gray-500 font-medium">Save your conference image as <code className="bg-gray-200 px-2 py-1 rounded text-brand font-bold">conference.png</code> in the <code className="bg-gray-200 px-2 py-1 rounded text-brand font-bold">public</code> folder.</p>
              </div>
              <img
                src="/conf.png"
                alt="International Conference"
                className="relative z-10 w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#142d53] mb-6">
              Why Target International Conferences?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Presenting your research at an international conference is a vital step in establishing your academic credibility. It provides you with a platform to share your findings, receive valuable feedback from peers, and network with global experts.
            </p>
            <ul className="space-y-4">
              {[
                "Global networking opportunities with industry leaders.",
                "Fast-tracked publication in Scopus & SCI indexed proceedings.",
                "Valuable feedback to refine your future thesis or papers.",
                "Enhances your academic resume and career prospects."
              ].map((item, index) => (
                <li key={index} className="flex items-start text-gray-800 font-medium">
                  <span className="flex-shrink-0 mt-1 mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="#ce1836" strokeWidth="2" />
                      <path d="M10 8L14 12L10 16" stroke="#ce1836" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Conference Services */}
      <section className="w-full py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#142d53] mb-4 relative inline-block">
              Our Conference Support Services
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#ce1836] rounded-full"></span>
            </h2>
            <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
              From selecting the right conference to formatting your final manuscript, NP BioPharma provides comprehensive support at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Decorative background circle on hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/10 transition-colors duration-500"></div>

                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-brand to-[#142d53] rounded-2xl flex items-center justify-center shadow-lg shadow-brand/30 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="relative z-10 text-xl font-bold text-[#142d53] mb-4">
                  {service.title}
                </h3>
                <p className="relative z-10 text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Upcoming Conferences Teaser */}
      <section className="w-full py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-red-50 rounded-full text-[#ce1836] font-semibold text-sm uppercase tracking-wide mb-4">
            Stay Updated
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#142d53] mb-6">
            Partnered Upcoming Conferences
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            NP BioPharma frequently partners with major international conferences. Keep an eye out for our upcoming partnered events, or contact us directly to find the best immediate opportunities for your research domain.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 px-6 bg-brand/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-brand mb-6">
            Ready to Take Your Research Global?
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Let our experts with 10+ years of experience prepare your paper for the world's most reputed conferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 text-lg font-bold text-white bg-[#ce1836] rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 hover:shadow-xl hover:-translate-y-1 transform duration-200"
            >
              Get Conference Support
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Conference;
