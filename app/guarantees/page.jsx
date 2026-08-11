import React from 'react';
import Link from 'next/link';

const Guarantees = () => {
  const guaranteesList = [
    {
      title: "100% Plagiarism-Free Work",
      desc: "We guarantee original content. Every piece of work is thoroughly checked using premium plagiarism detection tools to ensure authenticity.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "On-Time Delivery",
      desc: "Your deadlines are our priority. We promise strict adherence to agreed-upon timelines without compromising on quality.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Strict Confidentiality",
      desc: "Your research data, personal details, and intellectual property are kept 100% secure and confidential under strict NDAs.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Publication Standard Quality",
      desc: "We guarantee that all research papers and articles meet the rigorous standards of high-impact SCI and Scopus-indexed journals.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Direct Expert Interaction",
      desc: "We guarantee direct communication, conference calls, and meetings with our domain experts to clear your doubts.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      title: "24/7 Availability",
      desc: "We guarantee round-the-clock support. Our team is always available to answer your queries and provide prompt updates on your project.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
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
            Our Ironclad Guarantees
          </h1>
          <p className="text-lg md:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
            When you partner with NP BioPharma, your success, privacy, and peace of mind are absolutely guaranteed.
          </p>
        </div>
      </section>

      {/* Main Content: Guarantees Grid */}
      <section className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#142d53] mb-4 relative inline-block">
              Promises We Keep
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#ce1836] rounded-full"></span>
            </h2>
            <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
              We stand by the quality of our academic and research services. Our guarantees form the foundation of trust we build with every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {guaranteesList.map((guarantee, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center"
              >
                {/* Decorative background glow on hover */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand/5 rounded-full blur-3xl group-hover:bg-brand/10 transition-colors duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-[#ce1836] to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 mb-6">
                  {guarantee.icon}
                </div>
                
                {/* Content */}
                <h3 className="relative z-10 text-2xl font-bold text-[#142d53] mb-4">
                  {guarantee.title}
                </h3>
                <p className="relative z-10 text-gray-600 leading-relaxed text-lg">
                  {guarantee.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Trust & Verification Section */}
      <section className="w-full py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-[#142d53] mb-4">
              Unmatched Academic Integrity
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Before any deliverable reaches your inbox, it passes through our stringent multi-layer quality check. Our internal team reviews the technical accuracy, language quality, and formatting to ensure it exceeds international publication standards.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-end w-full">
            <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100">
              <svg className="w-12 h-12 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.95 11.95 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <div className="text-[#142d53] font-bold text-lg">100% Secured</div>
                <div className="text-gray-500 text-sm">Trusted by Scholars</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 px-6 bg-brand/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-brand mb-6">
            Ready to Proceed with Confidence?
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Experience risk-free, guaranteed academic assistance. Let our experts with 10+ years of experience handle your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 text-lg font-bold text-white bg-[#ce1836] rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 hover:shadow-xl hover:-translate-y-1 transform duration-200"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Guarantees;
