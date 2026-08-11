import React from 'react';
import Link from 'next/link';

const Topics = () => {
  const topicsData = [
    {
      category: "Pharmaceutical & Health Sciences",
      description: "Comprehensive research support in drug discovery, clinical trials, and medical sciences.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      areas: [
        "Pharmacology & Toxicology",
        "Pharmaceutics & Novel Drug Delivery",
        "Clinical Pharmacy & Therapeutics",
        "Biomedical Engineering",
        "Public Health & Epidemiology"
      ]
    },
    {
      category: "Life Sciences & Biology",
      description: "Advanced thesis and research assistance for fundamental and applied biological sciences.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      areas: [
        "Molecular Biology & Genetics",
        "Microbiology & Immunology",
        "Biochemistry & Biophysics",
        "Botany & Zoology",
        "Environmental Science & Ecology"
      ]
    },
    {
      category: "Engineering & Technology",
      description: "Expert guidance on technical thesis writing, data modeling, and experimental design.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      areas: [
        "Computer Science & AI",
        "Civil & Environmental Engineering",
        "Mechanical & Robotics Engineering",
        "Electrical & Electronics",
        "Information Technology"
      ]
    },
    {
      category: "Management & Social Sciences",
      description: "In-depth research support for qualitative and quantitative management studies.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      areas: [
        "Business Administration & MBA",
        "Human Resource Management",
        "Finance & Economics",
        "Marketing & Consumer Behavior",
        "Sociology & Psychology"
      ]
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
            Research Topics & Domains
          </h1>
          <p className="text-lg md:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
            Our expansive network of 547+ experts covers a wide array of academic and professional fields. Find your research domain below.
          </p>
        </div>
      </section>

      {/* Main Content: Topics Grid */}
      <section className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#142d53] mb-4 relative inline-block">
              Areas of Expertise
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#ce1836] rounded-full"></span>
            </h2>
            <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg">
              Whether you are drafting a master's thesis or publishing high-impact SCI/SCOPUS journals, our domain specialists provide tailored support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {topicsData.map((topic, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative background glow on hover */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand/5 rounded-full blur-3xl group-hover:bg-brand/10 transition-colors duration-500"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                  
                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#ce1836] to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {topic.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-[#142d53] mb-3">
                      {topic.category}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {topic.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {topic.areas.map((area, i) => (
                        <li key={i} className="flex items-start text-gray-700 font-medium">
                          <span className="flex-shrink-0 mt-1 mr-3 text-brand">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Specialty Banner / Additional Info */}
      <section className="w-full py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-[#142d53] mb-4">
              Don't see your topic listed?
            </h3>
            <p className="text-gray-600 text-lg">
              Our network includes over 547 diverse professionals. If your research falls into a niche or multidisciplinary area, chances are we have the perfect expert for you.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-end w-full">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 text-center text-lg font-bold text-white bg-brand rounded-xl hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 px-6 bg-brand/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-brand mb-6">
            Get Expert Guidance for Your specific Topic
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Reach out to our academic consultants to get a tailored proposal and timeline for your research topic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 text-lg font-bold text-white bg-[#ce1836] rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 hover:shadow-xl hover:-translate-y-1 transform duration-200"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Topics;
