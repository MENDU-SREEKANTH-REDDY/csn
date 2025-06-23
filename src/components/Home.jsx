import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mainImage from "../assets/main.jpg";

export default function Home() {
  const fullText = "Where Innovation Connects with Expertise";
  const [displayedText, setDisplayedText] = useState("");
  const location = useLocation();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (location.state?.scrollToId) {
      const element = document.getElementById(location.state.scrollToId);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  const cards = [
    {
      title: "IT Staffing Solutions",
      subtitle: "Flexible Hiring. Proven Talent. Scalable Teams.",
      content:
        "Whether you're building a new team or filling urgent roles, our IT staffing solutions are designed to give you access to highly skilled professionals without the delay.",
      listTitle: "Our Engagement Models",
      items: [
        "Contract Staffing – Scale your workforce for short-term needs or project-based work.",
      ],
    },
    {
      title: "Cloud Integration",
      subtitle: "Scalable. Secure. Seamless.",
      content:
        "We help you leverage the full potential of the cloud with integration strategies tailored for your business goals.",
      listTitle: "Our Offerings",
      items: ["Hybrid Solutions – Maximize flexibility and performance."],
    },
    {
      title: "Technology Consulting",
      subtitle: "Navigate Digital Transformation with Confidence.",
      content:
        "Get expert guidance for adopting the right technologies and scaling with confidence in your domain.",
      listTitle: "Consulting Focus Areas",
      items: ["Strategy & Planning – Bridge business goals and technology execution."],
    },
  ];

  const team = [
    {
      name: "Nitish Kumar",
      role: "Chief Technology Officer",
      description:
        "John brings over a decade of experience leading cross-functional teams and architecting enterprise-grade solutions across cloud and data platforms.",
    },
    {
      name: "Sarah Williams",
      role: "Head of Consulting",
      description:
        "Sarah leads the technology consulting division, aligning client strategies with modern IT solutions and ensuring successful digital transformation initiatives.",
    },
    {
      name: "Sarah Williams",
      role: "Head of Consulting",
      description:
        "Sarah leads the technology consulting division, aligning client strategies with modern IT solutions and ensuring successful digital transformation initiatives.",
    },
  ];

  return (
    <div className="bg-gradient-to-tr from-[#0B1E40] via-[#103E7D] to-[#1C64F2] min-h-screen text-white scroll-smooth">
      <Navbar />

      {/* Parallax Header */}
      <div
        className="relative h-[780px] bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        <div className="bg-white/80 p-6 rounded-xl shadow-xl">
          <h1 className="text-5xl font-bold text-[#0B1E40] mb-4">
            CSN Global IT Solutions
          </h1>
          <p className="text-xl font-medium text-[#0B1E40]">{displayedText}</p>
        </div>
      </div>

      {/* Services Heading */}
      <div className="max-w-7xl w-full mx-auto px-6 flex justify-start mt-10">
        <motion.hr
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "340px", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="border-t-2 border-white origin-center"
        />
      </div>

      <div id="services" className="max-w-7xl w-full mx-auto px-6 mt-5">
        <h2 className="text-4xl font-bold text-white mb-2">Services</h2>
        <p className="text-sm text-white">- What we provide</p>
      </div>

      {/* Service Cards */}
      <div className="flex justify-center items-center py-20 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-14 max-w-7xl w-full">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white text-[#0F2573] rounded-2xl shadow-xl p-6 border border-gray-300 relative w-full h-[500px] overflow-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="inline-block">
                <h2 className="text-2xl font-bold">{card.title}</h2>
                <motion.hr
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="border-t-2 border-blue-900 mt-1 mb-3"
                />
              </div>
              <p className="text-lg font-semibold mb-2">{card.subtitle}</p>
              <p className="text-gray-700 mb-4">{card.content}</p>
              <h3 className="font-semibold mb-1">{card.listTitle}</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Learn More with Dynamic Route */}
              <Link
                to={
                  index === 0
                    ? "/staffing"
                    : index === 1
                    ? "/RPO"
                    : index === 2
                    ? "/BPO"
                    : "#"
                }
                className="absolute bottom-4 left-4 px-4 py-2 bg-[#0B1E40] text-white rounded hover:bg-[#103E7D] transition"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Divider */}
      <div className="max-w-7xl w-full mx-auto px-6 flex justify-start mt-10">
        <motion.hr
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "340px", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="border-t-2 border-white origin-center"
        />
      </div>

      {/* Team Section */}
      <div id="team" className="max-w-7xl w-full mx-auto px-6 mt-5">
        <h2 className="text-4xl font-bold text-white mb-2">Team</h2>
        <p className="text-sm text-white">- What we do</p>
      </div>

      <div className="flex justify-center items-center py-20 px-4">
        <div className="grid grid-cols-1 gap-y-14 max-w-7xl w-full">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white text-[#0F2573] rounded-2xl shadow-xl p-6 border border-gray-300 relative w-full h-[250px] overflow-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="inline-block">
                <h2 className="text-2xl font-bold">{member.name}</h2>
                <motion.hr
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="border-t-2 border-blue-900 mt-1 mb-3"
                />
              </div>
              <p className="text-lg font-semibold mb-2">{member.role}</p>
              <p className="text-gray-700 mb-4">{member.description}</p>
              <a
                href="/team"
                className="absolute bottom-4 left-4 px-4 py-2 bg-[#0B1E40] text-white rounded hover:bg-[#103E7D] transition"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Divider */}
      <div className="max-w-7xl w-full mx-auto px-6 flex justify-start mt-10">
        <motion.hr
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "340px", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="border-t-2 border-white origin-center"
        />
      </div>

      {/* Contact Section */}
      <div id="contact" className="max-w-7xl w-full mx-auto px-6 mt-5">
        <h2 className="text-4xl font-bold text-white mb-2">Contact Us</h2>
        <p className="text-sm text-white">- Let's Connect</p>
      </div>

      <div className="mt-10 mb-20">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
