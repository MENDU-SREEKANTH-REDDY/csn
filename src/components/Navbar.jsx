import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target)
      ) {
        setContactOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // adjust for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setServicesOpen(false);
    setContactOpen(false);
  };

  const handleEnquiryClick = () => {
    if (location.pathname === "/") {
      // already on home page
      handleSmoothScroll("contact");
    } else {
      // navigate to home and scroll to contact
      navigate("/", { state: { scrollToId: "contact" } });
    }
  };

  return (
    <nav className="bg-white/10 backdrop-blur-lg text-white px-6 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="text-xl font-medium bg-gradient-to-r from-white via-[#AFCBFA] to-[#1C64F2] bg-clip-text text-transparent drop-shadow-md">
        CSN Global IT Solutions
      </div>

      <div className="flex items-center space-x-4 text-base font-medium">
        <a href="/" className="px-4 py-2 rounded hover:bg-white/20 transition text-[#0F2573]">
          Home
        </a>

        <div className="relative" ref={servicesRef}>
          <button
            onClick={() => {
              setServicesOpen((prev) => !prev);
              setContactOpen(false);
            }}
            className="px-4 py-2 rounded hover:bg-white/20 transition text-[#0F2573]"
          >
            Services
          </button>
          {servicesOpen && (
            <div
              onMouseLeave={() => setServicesOpen(false)}
              className="absolute top-full left-0 mt-1 flex flex-col bg-white text-[#0F2573] rounded shadow-md w-44 z-50"
            >
              <a href="/staffing" className="px-4 py-2 hover:bg-gray-100 hover:text-black transition">
                IT Staffing
              </a>
              <a href="/RPO" className="px-4 py-2 hover:bg-gray-100 hover:text-black transition">
                RPO
              </a>
              <a href="/BPO" className="px-4 py-2 hover:bg-gray-100 hover:text-black transition">
                BPO
              </a>
            </div>
          )}
        </div>

        <a href="/team" className="px-4 py-2 rounded hover:bg-white/20 transition text-[#0F2573]">
          Team
        </a>

        <div className="relative" ref={contactRef}>
          <button
            onClick={() => {
              setContactOpen((prev) => !prev);
              setServicesOpen(false);
            }}
            className="px-4 py-2 rounded hover:bg-white/20 transition text-[#0F2573]"
          >
            Contact Us
          </button>

          {contactOpen && (
            <div
              onMouseLeave={() => setContactOpen(false)}
              className="absolute top-full left-0 mt-1 flex flex-col bg-white text-[#0F2573] rounded shadow-md w-48 z-50"
            >
              <button
                onClick={handleEnquiryClick}
                className="text-left px-4 py-2 hover:bg-gray-100 hover:text-black transition w-full"
              >
                Make an Enquiry
              </button>
              <a
                href="/privacy"
                className="px-4 py-2 hover:bg-gray-100 hover:text-black transition"
              >
                Privacy Policy
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
