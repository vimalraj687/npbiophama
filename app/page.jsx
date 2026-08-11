import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className='w-full min-h-screen bg-gray-50 flex flex-col'>
      {/* Banner Section */}
      <section className='w-full bg-gray-100'>
        <div className='w-full relative flex items-center justify-center'>

          {/* Fallback text if the image is missing */}
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-0'>
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className='text-gray-500 font-medium'>Please save your image as <code className='bg-gray-200 px-2 py-1 rounded text-brand'>banner.png</code> in the <code className='bg-gray-200 px-2 py-1 rounded text-brand'>public</code> folder.</p>
          </div>

          {/* The Banner Image */}
          <img
            src="/banner.png"
            alt="Expert Guidance and Academic Excellence Banner"
            className='relative w-full h-auto z-10 block'
          />
        </div>
      </section>

      {/* Welcome / Intro Section */}
      <section className='w-full py-16 md:py-24 px-6 md:px-12'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-6'>
            Welcome to <span className='text-brand'>NP BioPharma</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-600 leading-relaxed mb-8'>
            We provide expert guidance and academic excellence. Your companion for exceptional research support, helping you transform ideas into published research.
          </p>
          <Link href="/contact" className='inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand rounded-full hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200'>
            Let's Achieve Excellence Together!
          </Link>
        </div>
      </section>

      {/* Top Services Section */}
      <section className='w-full py-16 md:py-24 px-6 md:px-12 bg-white'>
        <div className='max-w-screen-2xl mx-auto'>

          {/* Section Heading */}
          <div className='flex justify-center mb-16'>
            <div className='border-[3px] border-brand rounded-full px-8 py-3 md:px-12 md:py-4 shadow-sm'>
              <h2 className='text-2xl md:text-4xl font-black text-brand uppercase tracking-wide'>
                NP BIOPHARMA - OUR TOP SERVICES
              </h2>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch'>
            {/* Left Column: Services List */}
            <div className='flex flex-col justify-center pl-6 lg:pl-0'>
              <ul className='space-y-6 list-disc list-outside text-gray-600 text-lg leading-relaxed marker:text-gray-500'>
                <li>
                  <strong className='text-gray-900'>Thesis Writing:</strong> NP BioPharma provides comprehensive support for writing. This includes assistance with topic selection, literature review, methodology, data analysis, discussion, and conclusion sections.
                </li>
                <li>
                  <strong className='text-gray-900'>Research Paper:</strong> NP BioPharma offers assistance with all stages of research paper writing, from conceptualization to publication which help with defining research objectives, conducting literature reviews & designing methodologies.
                </li>
                <li>
                  <strong className='text-gray-900'>Publication Support:</strong> NP BioPharma guides researchers through the publication process, from selecting appropriate journals to formatting manuscripts and addressing reviewer feedback. By providing insights into journal selection criteria.
                </li>
                <li>
                  <strong className='text-gray-900'>Synopsis Writing:</strong> NP BioPharma assists researchers in crafting concise and compelling synopsis that effectively summarize the key aspects of their research projects.
                </li>
                <li>
                  <strong className='text-gray-900'>Dissertation Assistance:</strong> NP BioPharma offers comprehensive support for graduate students undertaking dissertations. This includes guidance on topic selection, proposal development, literature review & research design.
                </li>
                <li>
                  <strong className='text-gray-900'>Data Analysis:</strong> NP BioPharma assists in analyzing your research data using various statistical and analytical methods. They help interpret the results accurately and present them clearly, ensuring the data supports your research objectives and findings effectively.
                </li>
              </ul>
            </div>

            {/* Right Column: Illustration */}
            <div className='w-full min-h-[500px] border-[3px] border-brand p-4 relative flex items-center justify-center bg-white rounded-sm'>
              {/* Fallback for image */}
              <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-0'>
                <svg className="mx-auto h-12 w-12 text-brand mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className='text-gray-500 font-medium'>Save your illustration as <code className='bg-gray-200 px-2 py-1 rounded text-brand font-bold'>services.png</code> in the <code className='bg-gray-200 px-2 py-1 rounded text-brand font-bold'>public</code> folder.</p>
              </div>

              <img
                src="/second.png"
                alt="NP BioPharma Services Illustration"
                className="relative w-full h-full object-contain z-10"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className='w-full py-16 md:py-24 px-6 md:px-12 bg-white'>
        <div className='max-w-screen-2xl mx-auto'>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
            {/* Left Column: Illustration */}
            <div className='w-full relative flex items-center justify-center'>
              {/* Illustration Image placeholder */}
              <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-0'>
                <svg className="mx-auto h-12 w-12 text-brand mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className='text-gray-500 font-medium'>Save your illustration as <code className='bg-gray-200 px-2 py-1 rounded text-brand font-bold'>why-choose-us.png</code> in the <code className='bg-gray-200 px-2 py-1 rounded text-brand font-bold'>public</code> folder.</p>
              </div>

              <img
                src="/res.png"
                alt="Why Choose Us Illustration"
                className="relative w-full max-w-[500px] h-auto object-contain z-10 drop-shadow-sm"
              />
            </div>

            {/* Right Column: Content */}
            <div className='flex flex-col justify-center'>
              <h2 className='text-[28px] md:text-[32px] font-bold text-[#142d53] mb-8'>
                Why Choose Us
              </h2>

              <ul className='space-y-5'>
                {[
                  "We have a team of more than 547 skilled professionals expertise in the field of Engineering, Science & Technology, Management etc",
                  "We will provide high quality articles (SCOPUS, SCI Standard) with good plagiarism report",
                  "Our team of experts with minimum 10+ years of experience will assist & deliver your project on-time",
                  "Our team will review & check your paper's total quality, technical quality & language before handing it to you",
                  "We will arrange a conference call, meeting to get our expert help and support to clear doubts",
                  "We will publish the research articles in reputed international journals such as SCOPUS, SCI etc",
                  "Guidance & Assistance will be provided for research article editing with publications, proof reading and editing etc",
                  "24*7 Enquiry"
                ].map((item, index) => (
                  <li key={index} className='flex items-start text-black text-[14px] md:text-[15px] leading-[1.6]'>
                    <span className='flex-shrink-0 mt-[3px] mr-3'>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke="#ce1836" strokeWidth="2" />
                        <path d="M10 8L14 12L10 16" stroke="#ce1836" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default page;