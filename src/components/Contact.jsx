import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true;
    if (!formData.company.trim()) newErrors.company = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.inquiryType) newErrors.inquiryType = true;
    if (!formData.message.trim()) newErrors.message = true;
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      inquiryType: formData.inquiryType,
      message: formData.message,
    };

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        templateParams,
        "your_user_id"
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            inquiryType: "",
            message: "",
          });
          setErrors({});
        },
        () => {
          setStatusMessage("Something went wrong. Please try again.");
        }
      );
  };

  const inputClasses = (field) =>
    `w-full p-3 rounded bg-white/10 border ${
      errors[field] ? "border-red-500" : "border-white/20"
    } focus:outline-none text-white placeholder-white/80`;

  return (
    <div className=" min-h-screen flex items-center justify-center px-4 text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white/10 backdrop-blur p-10 rounded-lg shadow-xl text-white space-y-6"
      >
        <div className="mb-6 text-center">
          {/* <h2 className="text-3xl font-bold">Get in Touch</h2> */}
          <p className="text-white/80"> Send us a message below</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClasses("name")}
          />
          <input
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClasses("email")}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Company *"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className={inputClasses("company")}
          />
          <input
            type="text"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClasses("phone")}
          />
        </div>

        <select
          value={formData.inquiryType}
          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
          className={inputClasses("inquiryType")}
        >
          <option value="" disabled>Select Inquiry Type</option>
          <option className="text-[#0F2573]" value="General Inquiry">General Inquiry</option>
          <option className="text-[#0F2573]" value="Talent Acquisition">Talent Acquisition</option>
          <option className="text-[#0F2573]" value="Partnership Opportunity">Partnership Opportunity</option>
        </select>

        <textarea
          rows="5"
          placeholder="Tell us about your project or requirements *"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={inputClasses("message")}
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-[#1C64F2] to-[#00BCD4] rounded text-white font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>

        {statusMessage && (
          <p className="text-sm mt-2 text-center text-white/90">{statusMessage}</p>
        )}
      </form>
    </div>
  );
}
