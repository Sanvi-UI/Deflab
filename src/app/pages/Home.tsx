import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-gray-50 py-8 lg:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-5">
              <div className="inline-block">
                <span className="text-sm tracking-wider text-[#003153] px-4 py-2 bg-[#7DF9FF]/20 rounded-full">
                  DESIGN FOR FUTURE LAB
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl text-[#003153] leading-tight">
                Designing Future Mobility & Immersive Innovation
              </h1>
              <p className="text-lg text-[#666666] max-w-xl">
                A research space exploring VR, immersive simulations, digital prototyping, and future mobility design at IIT Bombay.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/research"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#FF6600]/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Explore Research
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#003153] rounded-lg hover:bg-gray-50 transition-colors border-2 border-[#003153]"
                >
                  Visit Lab
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1758273239313-6c703d089dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGV4cGVyaWVuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3Mjk1NjE0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="VR Experience"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#7DF9FF]/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-[#FF6600]/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe In Section */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-3">
              <span className="text-sm tracking-wider text-[#FF6600] uppercase">
                Our Mission
              </span>
            </div>
            <div className="mb-6">
              <h2 className="text-4xl lg:text-5xl text-[#003153] mb-2">What We Believe In</h2>
              <div className="w-20 h-1 bg-[#FF6600] mx-auto"></div>
            </div>
            <div className="space-y-2 text-xl lg:text-2xl text-[#003153] leading-relaxed">
              <p>
                Design for Future (DeF) lab is envisioned to create visions for new <span className="text-[#FF6600] font-medium">design solutions</span>
              </p>
              <p>
                that contribute to the <span className="text-[#FF6600] font-medium">social</span>, <span className="text-[#FF6600] font-medium">environmental</span>, and <span className="text-[#FF6600] font-medium">economic benefit</span>
              </p>
              <p>
                of new transforming India through <span className="text-[#FF6600] font-medium">design innovation</span> and active <span className="text-[#FF6600] font-medium">research</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl text-[#003153] mb-6 leading-tight">
              We're a group of creative thinkers who have built a Design for future Lab to change the world.
            </h2>
            <div className="w-20 h-1 bg-[#FF6600] mx-auto mb-8"></div>
            
            <div className="space-y-6 text-lg text-[#666666] leading-relaxed">
              <p>
                DeF Lab brings together experts from various fields to innovate and develop cutting-edge solutions in the Creative industries. Our team focuses on integrating design and research to create forward-thinking, sustainable, and efficient technologies that shape the future of Design.
              </p>
              <p>
                Our Facility of DeF Lab is one of the first of a new generation of research facilities at IDC School of Design to highlight IIT Bombay's commitment to transforming students and researchers into thought leaders equipped to solve real problems through the application of technology and design solutions. We are equipped with the latest tools and technology to bring your ideas to life and push the boundaries of what's possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="mb-3">
              <span className="text-sm tracking-wider text-[#666666] uppercase">
                What we are best at
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[#003153] mb-6">Our Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <img src="figma:asset/4032499d945929456d838a92a7506505c61d98ca.png" alt="" className="w-16 h-16" />,
                title: "AR/VR Experience",
                description: "Our AR/VR solutions transform how users interact with digital content. Providing immersive and engaging experiences across different industries.",
              },
              {
                icon: <img src="figma:asset/2728e23ca6925496f75318045fd0a5c693077ca8.png" alt="" className="w-16 h-16" />,
                title: "3D Printing",
                description: "Produce tailored parts and products with precision and customization options. Quickly turn digital designs into physical models for testing and development.",
              },
              {
                icon: <img src="figma:asset/4032499d945929456d838a92a7506505c61d98ca.png" alt="" className="w-16 h-16" />,
                title: "3D Scanning",
                description: "Capture detailed and accurate 3D models of objects, environments, and Reconstruct digital models of existing parts for redesign or replication.",
              },
              {
                icon: <img src="figma:asset/4032499d945929456d838a92a7506505c61d98ca.png" alt="" className="w-16 h-16" />,
                title: "Creative Coding",
                description: "Develop dynamic visuals, animations, and generative art using coding languages. Build unique, interactive applications and installations tailored to specific creative and technical requirement",
              },
              {
                icon: <img src="figma:asset/4032499d945929456d838a92a7506505c61d98ca.png" alt="" className="w-16 h-16" />,
                title: "Immersive Simulation",
                description: "Experience immersive and interactive gaming experience..",
              },
              {
                icon: <img src="figma:asset/4032499d945929456d838a92a7506505c61d98ca.png" alt="" className="w-16 h-16" />,
                title: "Art & Illustrations",
                description: "Our art and illustration offers a blend of creativity, customization, and professional quality to bring your vision to life, enhancing the visual impact of your projects across various media.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-xl text-[#003153] mb-3 text-center font-semibold">{item.title}</h3>
                <p className="text-[#666666] text-center leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="mb-3">
              <span className="text-sm tracking-wider text-[#FF6600] uppercase">
                Gallery
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl text-[#003153] mb-4 leading-tight">
              Lab in Action
            </h2>
            <p className="text-xl text-[#666666]">
              Glimpses from our research and innovation space
            </p>
          </div>

          {/* Bento Grid Gallery */}
          <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[700px]">
            {/* Large Image - Top Left */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <img
                src="https://images.unsplash.com/photo-1743691434566-8d81416c66c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc2hvcCUyMHN0dWRlbnRzfGVufDF8fHx8MTc3Mjk5Nzc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Design Workshop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Tall Image - Top Right */}
            <div className="col-span-2 row-span-3 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <img
                src="https://images.unsplash.com/photo-1758523670318-f1b79559e1d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMHZpcnR1YWwlMjByZWFsaXR5JTIwaGVhZHNldHxlbnwxfHx8fDE3NzI5OTM1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="VR Experience"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Small Image - Middle Left */}
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <img
                src="https://images.unsplash.com/photo-1739607448062-7d4accb12fe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50aW5nJTIwcHJvdG90eXBpbmclMjBsYWJ8ZW58MXx8fHwxNzcyOTk3NzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="3D Printing Lab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Small Image - Middle Center */}
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <img
                src="https://images.unsplash.com/photo-1723730741647-caaea47ac90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGVuZ2luZWVyaW5nJTIwcHJvamVjdHxlbnwxfHx8fDE3NzI5OTc2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Robotics Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Wide Image - Bottom Left */}
            <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <img
                src="https://images.unsplash.com/photo-1758387836566-6a342434f5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZmFicmljYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3Mjk5Nzc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital Fabrication"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="mb-3">
              <span className="text-sm tracking-wider text-[#FF6600] uppercase">
                News & Updates
              </span>
            </div>
            <h2 className="text-4xl text-[#003153] mb-3">Latest Happenings</h2>
            <p className="text-lg text-[#666666]">Stay updated with our recent activities and achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                date: "March 5, 2026",
                title: "New VR Equipment Installation Completed",
                description: "State-of-the-art VR systems now operational for immersive design research",
                category: "Facilities"
              },
              {
                date: "February 28, 2026",
                title: "Research Paper Published in Design Journal",
                description: "Our work on future mobility concepts featured in leading international journal",
                category: "Research"
              },
              {
                date: "February 20, 2026",
                title: "Workshop on Digital Prototyping",
                description: "Successful completion of 3-day intensive workshop with industry experts",
                category: "Workshop"
              },
            ].map((news, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs tracking-wider text-[#FF6600] bg-[#FF6600]/10 px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                  <span className="text-sm text-[#666666]">{news.date}</span>
                </div>
                <h3 className="text-xl text-[#003153] mb-3">{news.title}</h3>
                <p className="text-[#666666]">{news.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-[#FF6600] hover:text-[#003153] transition-colors"
            >
              View All News & Events
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}