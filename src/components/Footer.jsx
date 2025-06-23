import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Divider Line Above Footer */}
      <div className="w-full">
        <hr className="border-white opacity-60" />
      </div>

      {/* Footer Section */}
      <div className="bg-gradient-to-tr from-[#0B1E40] via-[#103E7D] to-[#1C64F2] text-white pt-10 pb-[200px]">
        {/* Icons */}
        <div className="flex justify-center space-x-6 mb-10">
          <a href="https://www.linkedin.com/company/csn-global-it-solutions/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <div className="bg-white p-3 rounded-full text-[#0B1E40] hover:scale-110 transition">
              <FaLinkedin size={24} />
            </div>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-white p-3 rounded-full text-[#0B1E40] hover:scale-110 transition">
              <FaInstagram size={24} />
            </div>
          </a>
          <a href="mailto:contact@csn.com">
            <div className="bg-white p-3 rounded-full text-[#0B1E40] hover:scale-110 transition">
              <FaEnvelope size={24} />
            </div>
          </a>
        </div>

        {/* Footer Links Section */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-4 gap-8 text-sm font-medium">
          {/* About Us */}
          <div>
            <a href="/about" className="block mb-2 hover:underline">
              About Us
            </a>
            <a href="/about" className="hover:underline">
              What we do
            </a>
          </div>

          {/* Home */}
          <div>
            <a href="/" className="block mb-2 hover:underline">
              Home
            </a>
          </div>

          {/* Services */}
          <div>
            <a href="/services" className="block mb-2 hover:underline">
              Services
            </a>
            <a href="/services" className="hover:underline">
              What we provide
            </a>
          </div>

          {/* Contact */}
          <div>
            <a href="/contact" className="block mb-2 hover:underline">
              Contact Us
            </a>
            <p className="opacity-60">+91 0000000000</p>
          </div>
        </div>
      </div>
    </>
  );
}
