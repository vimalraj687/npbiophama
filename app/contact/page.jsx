import React from 'react';

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col font-sans">

      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#142d53] to-brand z-0"></div>
        {/* Subtle background overlay pattern */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-md">
            Get In Touch
          </h1>
          <p className="text-lg md:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
            Ready to accelerate your research? Contact our team of experts for 24/7 support and personalized guidance.
          </p>
        </div>
      </section>

      {/* Main Content: Contact Layout */}
      <section className="w-full py-20 px-6 md:px-12 bg-white flex-1">
        <div className="max-w-screen-2xl mx-auto">

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left Column: Contact Information */}
            <div className="lg:w-5/12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#142d53] mb-6">
                Let's Discuss Your Project
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Whether you need help with thesis writing, data analysis, or publishing in top-tier international journals, our 547+ experts are here to help. Reach out to us through any of the channels below.
              </p>

              <div className="space-y-8">
                {/* 24/7 Support */}
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-red-50 text-[#ce1836] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-[#142d53] mb-1">24/7 Enquiry Support</h3>
                    <p className="text-gray-600">Our support team is always available around the clock to answer your queries.</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-brand/5 text-brand rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-[#142d53] mb-1">Email Us</h3>
                    <p className="text-gray-600">info@npbiopharma.com</p>
                    <p className="text-gray-600">support@npbiopharma.com</p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-brand/5 text-brand rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-[#142d53] mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm mt-1">Direct conference calls with experts available upon request.</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-brand/5 text-brand rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-[#142d53] mb-1">Corporate Office</h3>
                    <p className="text-gray-600">Manuscriptome Headquarters</p>
                    <p className="text-gray-600">Global Research Park, Building 4</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:w-7/12">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
                <h3 className="text-2xl font-bold text-[#142d53] mb-8">Send Us a Message</h3>

                <form className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Required</label>
                      <select
                        id="service"
                        className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors text-gray-700"
                      >
                        <option value="">Select a service...</option>
                        <option value="thesis">Thesis Writing</option>
                        <option value="research-paper">Research Paper Assistance</option>
                        <option value="publication">Publication Support (SCI/Scopus)</option>
                        <option value="synopsis">Synopsis Writing</option>
                        <option value="data-analysis">Data Analysis</option>
                        <option value="conference">Conference Support</option>
                        <option value="other">Other / Custom Query</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Your Message / Research Topic</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors resize-none"
                      placeholder="Tell us about your research objectives and how we can assist you..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="button"
                    className="w-full py-4 text-lg font-bold text-white bg-[#ce1836] rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 hover:shadow-xl hover:-translate-y-1 transform duration-200"
                  >
                    Submit Enquiry
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Your information is 100% secure. We adhere to strict NDAs.
                  </p>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
