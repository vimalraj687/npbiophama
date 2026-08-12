import React from 'react';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      title: "Thesis Writing",
      description: "Manuscriptome provides comprehensive support for writing. This includes assistance with topic selection, literature review, methodology, data analysis, discussion, and conclusion sections.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Research Paper",
      description: "Manuscriptome offers assistance with all stages of research paper writing, from conceptualization to publication which help with defining research objectives, conducting literature reviews & designing methodologies.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Publication Support",
      description: "Manuscriptome guides researchers through the publication process, from selecting appropriate journals to formatting manuscripts and addressing reviewer feedback. By providing insights into journal selection criteria.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    {
      title: "Synopsis Writing",
      description: "Manuscriptome assists researchers in crafting concise and compelling synopsis that effectively summarize the key aspects of their research projects.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "Dissertation Assistance",
      description: "Manuscriptome offers comprehensive support for graduate students undertaking dissertations. This includes guidance on topic selection, proposal development, literature review & research design.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      title: "Data Analysis",
      description: "Manuscriptome assists in analyzing your research data using various statistical and analytical methods. They help interpret the results accurately and present them clearly, ensuring the data supports your research objectives and findings effectively.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-brand overflow-hidden">
        {/* Abstract Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-white blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-light/20 text-white/90 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive support for all stages of your academic and research journey. Our experts are dedicated to helping you achieve excellence.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full py-20 md:py-28 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col h-full relative overflow-hidden"
              >
                {/* Decorative top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-brand-light transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

                <div className="w-16 h-16 rounded-2xl bg-brand flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-dark">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-base flex-grow">
                  {service.description}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-50">
                  <Link href="/contact" className="inline-flex items-center text-brand font-semibold hover:text-brand-dark transition-colors group/link">
                    Get Assistance
                    <svg className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-brand/5 to-brand/10 rounded-3xl p-10 md:p-16 border border-brand/10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Accelerate Your Research?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Contact our team of experts today and take the first step towards academic excellence and successful publication.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-brand rounded-full hover:bg-brand-dark transition-all duration-300 shadow-xl shadow-brand/20 hover:shadow-2xl hover:shadow-brand/40 hover:-translate-y-1"
          >
            Contact Our Experts Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
