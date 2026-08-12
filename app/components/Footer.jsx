import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-brand text-white py-12 px-6 md:px-12 mt-auto">
      <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 lg:divide-x divide-white/20">

        {/* Column 1: About */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold uppercase mb-6 tracking-wide">Manuscriptome</h3>
          <p className="text-sm leading-relaxed text-gray-100">
            Our dedication and efforts have been resulted in tremendous accomplishments and every single achievement of our candidates motivates us to bring even more perfection to our services. We feel so honored as our candidates have been earning a plenty of benefits right after the completion of their education. The benefits are multiples such as social benefits.
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col lg:pl-12">
          <h3 className="text-xl font-bold uppercase mb-6 tracking-wide">LINKS</h3>
          <ul className="space-y-3">
            {[
              "About Us",
              "How We Work",
              "Literature Review",
              "Research Synopsis",
              "Research Thesis",
              "Publication",
              "Plagiarism Check"
            ].map((link, idx) => (
              <li key={idx}>
                <Link href="#" className="text-sm text-gray-100 hover:text-white transition-colors flex items-center gap-2 font-medium">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="flex flex-col lg:pl-12 pt-8 md:pt-0 border-t md:border-t-0 border-white/20">
          <h3 className="text-xl font-bold uppercase mb-6 tracking-wide">CONTACT US</h3>
          <div className="space-y-5 text-sm text-gray-100 font-medium">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-0.5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <p>Shop No. 1, Ground Floor, 290, Tiwariganj, Utterdhauna, Chinhat, Lucknow 226028</p>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <p>contact@npbiopharma.in</p>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <p>+91 9821-664-888</p>
            </div>
          </div>
        </div>

        {/* Column 4: Map */}
        <div className="flex flex-col lg:pl-12">
          <h3 className="text-xl font-bold uppercase mb-6 tracking-wide">MAP</h3>
          <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.677953705257!2d81.0441584!3d26.8821952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be1ab2a714c69%3A0xcda8d7e909a34bc3!2sChinhat%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

      </div>
    </footer>
  );
}
