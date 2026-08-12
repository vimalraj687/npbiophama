import React from 'react';
import Link from 'next/link';

const WhyUs = () => {
  const reasons = [
    {
      title: "Vast Expert Team",
      desc: "We have a team of more than 547 skilled professionals expertise in the field of Engineering, Science & Technology, Management etc.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "High-Quality Standards",
      desc: "We will provide high quality articles (SCOPUS, SCI Standard) with good plagiarism report.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "On-Time Delivery",
      desc: "Our team of experts with minimum 10+ years of experience will assist & deliver your project on-time.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Thorough Quality Check",
      desc: "Our team will review & check your paper's total quality, technical quality & language before handing it to you.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Direct Expert Support",
      desc: "We will arrange a conference call, meeting to get our expert help and support to clear doubts.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      title: "Reputed Publications",
      desc: "We will publish the research articles in reputed international journals such as SCOPUS, SCI etc.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Comprehensive Guidance",
      desc: "Guidance & Assistance will be provided for research article editing with publications, proof reading and editing etc.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "24/7 Support",
      desc: "24*7 Enquiry - We are always available to answer your questions and provide support.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col font-sans">

      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#142d53] to-brand z-0"></div>
        {/* Subtle background patterns */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-md">
            Why Choose Manuscriptome?
          </h1>
          <p className="text-lg md:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
            Your trusted companion for exceptional research support. We help you transform ideas into published, world-class research.
          </p>
        </div>
      </section>

      {/* Main Content: Reasons Grid */}
      <section className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#142d53] mb-4 relative inline-block">
              Our Core Strengths
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#ce1836] rounded-full"></span>
            </h2>
            <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
              We stand out in the academic and research assistance industry by prioritizing quality, punctuality, and comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Decorative background circle on hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/10 transition-colors duration-500"></div>

                <div className="w-16 h-16 bg-gradient-to-br from-[#ce1836] to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-[#142d53] mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 px-6 bg-brand/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-brand mb-6">
            Ready to Accelerate Your Research?
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Partner with Manuscriptome today and experience academic excellence like never before. Let our experts handle the complexities while you focus on your core objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 text-lg font-bold text-white bg-[#ce1836] rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 hover:shadow-xl hover:-translate-y-1 transform duration-200"
            >
              Contact Us Now
            </Link>
            <Link
              href="/"
              className="px-8 py-4 text-lg font-bold text-brand bg-white border-2 border-brand/20 rounded-full hover:bg-brand/5 transition-colors shadow-sm hover:-translate-y-1 transform duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhyUs;
