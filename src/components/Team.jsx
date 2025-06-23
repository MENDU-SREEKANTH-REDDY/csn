import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import mainImage from "../assets/main.jpg";
import { FaLinkedin } from "react-icons/fa";

export default function Team() {
  const team = [
    {
      name: "Nitish Kumar",
      role: "Chief Technology Officer",
      description:
        "Leading our tech strategy, Nitish drives innovation and architecture across cloud, AI, and full-stack development initiatives.",
      image: "/assets/nitish.jpg",
      linkedin: "#",
    },
    {
      name: "Sarah Williams",
      role: "Head of Consulting",
      description:
        "Sarah helps clients bridge their business goals with tailored IT strategies and oversees our consulting operations globally.",
      image: "/assets/sarah.jpg",
      linkedin: "#",
    },
    {
      name: "Rohan Das",
      role: "VP of Operations",
      description:
        "Rohan ensures operational excellence, manages delivery teams, and scales client success across all regions.",
      image: "/assets/rohan.jpg",
      linkedin: "#",
    },
  ];

  return (
    <div className="bg-gradient-to-tr from-[#0B1E40] via-[#103E7D] to-[#1C64F2] text-white min-h-screen scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[780px] bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <div className="bg-white/80 p-6 rounded-xl shadow-xl">
          <h1 className="text-5xl font-bold text-[#0B1E40] mb-4">Our Leadership</h1>
          <p className="text-xl font-medium text-[#0B1E40] max-w-3xl">
            Meet the driving force behind CSN Global — a team committed to delivering excellence, innovation, and value.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-20">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/3">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[360px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-2/3 bg-white text-[#0B1E40] rounded-2xl shadow-xl p-8 relative">
              <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
              <motion.hr
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="border-t-2 border-blue-900 mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{member.role}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{member.description}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-800 hover:text-blue-600 transition"
              >
                <FaLinkedin className="mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
