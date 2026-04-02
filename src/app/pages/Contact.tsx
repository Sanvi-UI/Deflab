import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import idcBuildingImage from "figma:asset/ca5ab052a9b14c33bdf56930935023eb87e35e5d.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl text-[#003153] mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6"></div>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto">
            Get in touch with us for research collaborations, lab visits, course inquiries, or any questions about DEF Lab.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF6600]/10 rounded-lg">
                    <Mail className="w-6 h-6 text-[#FF6600]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#003153] mb-2">Email</h3>
                    <a
                      href="mailto:mobilityvehicledesigniitb@gmail.com"
                      className="text-[#666666] hover:text-[#FF6600] transition-colors break-all"
                    >
                      mobilityvehicledesigniitb@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#7DF9FF]/20 rounded-lg">
                    <Phone className="w-6 h-6 text-[#003153]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#003153] mb-2">Phone</h3>
                    <a
                      href="tel:+919864801504"
                      className="text-[#666666] hover:text-[#FF6600] transition-colors"
                    >
                      +91 98648 01504
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#003153]/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#003153]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#003153] mb-2">Location</h3>
                    <p className="text-[#666666]">
                      DEF Lab - Design for Future Lab<br />
                      Indian Institute of Technology Bombay<br />
                      Powai, Mumbai 400076<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-[#003153] rounded-xl p-8 text-white">
              <h3 className="text-2xl mb-4">Lab Hours</h3>
              <div className="space-y-2 text-gray-200">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-4">
                * Please schedule an appointment for lab visits
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-md p-8">
            <h2 className="text-2xl text-[#003153] mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-[#666666] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-[#666666] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm text-[#666666] mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="research">Research Collaboration</option>
                  <option value="visit">Lab Visit Request</option>
                  <option value="course">Course Inquiry</option>
                  <option value="workshop">Workshop Registration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-[#666666] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#FF6600]/90 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-gray-100">
            <img
              src={idcBuildingImage}
              alt="IDC Building - IIT Bombay"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-sm text-[#666666] mt-4">
            DEF Lab is located within the IIT Bombay campus in Powai, Mumbai
          </p>
        </div>
      </div>
    </div>
  );
}