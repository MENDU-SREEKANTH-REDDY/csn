import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import mainImage from "../assets/main2.jpg";

export default function Itstaffing() {
  return (
    <div className="bg-gradient-to-tr from-[#0B1E40] via-[#103E7D] to-[#1C64F2] min-h-screen text-white scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[780px] bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <div className="bg-white/80 p-6 rounded-xl shadow-xl">
          <h1 className="text-5xl font-bold text-[#0B1E40] mb-4">
            IT Staffing Solutions
          </h1>
          <p className="text-xl font-medium text-[#0B1E40]">
            Flexible Hiring. Proven Talent. Scalable Teams.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16 text-white">
        {/* Intro */}
        <section>
          <p className="text-lg md:text-xl leading-relaxed text-white">
            Whether you're building a new team or filling urgent roles, our IT staffing solutions are designed to connect you with top-tier talent — efficiently and reliably. We tailor our approach to your technical requirements, timeline, and organizational culture.
          </p>
        </section>

        {/* Engagement Models */}
   <section>
  <h2 className="text-3xl font-semibold">Our Engagement Models</h2>

  {/* 🔽 Animated HR line added here */}
  <motion.hr
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: "100%", opacity: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="border-t-2 border-white mt-2 mb-6"
  />

  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur transform transition duration-300 hover:scale-105 hover:bg-white/20">
      <h3 className="text-2xl font-bold mb-2">Contract Staffing</h3>
      <p className="text-white/90">
        Scale your workforce for short-term needs or project-based work with highly vetted IT professionals.
      </p>
    </div>

    <div className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur transform transition duration-300 hover:scale-105 hover:bg-white/20">
      <h3 className="text-2xl font-bold mb-2">Permanent Staffing</h3>
      <p className="text-white/90">
        Hire full-time employees who not only meet technical criteria but align with your company’s vision and values.
      </p>
    </div>

    <div className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur transform transition duration-300 hover:scale-105 hover:bg-white/20">
      <h3 className="text-2xl font-bold mb-2">Contract-to-Hire</h3>
      <p className="text-white/90">
        Minimize hiring risk by evaluating a candidate’s performance on the job before making a long-term commitment.
      </p>
    </div>
  </div>
</section>

        {/* Why CSN */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Why Choose CSN?</h2>
          <ul className="list-disc list-inside space-y-3 text-white/90">
            <li>
              <strong>Fast turnaround</strong> with access to a curated talent pool across technologies and domains.
            </li>
            <li>
              <strong>Rigorous screening</strong> for technical proficiency and cultural fit.
            </li>
            <li>
              <strong>Dedicated account managers</strong> who understand your goals and streamline your hiring process.
            </li>
            <li>
              Scalable engagement options tailored to startups, mid-size businesses, and enterprises.
            </li>
          </ul>
        </section>
      </div>
      <Footer/>
    </div>
  );
}
