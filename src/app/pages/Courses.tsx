import { BookOpen, Users, Clock } from "lucide-react";

export function Courses() {
  const courses = [
    {
      title: "Design for Future",
      instructor: "Dr. Amarnath Singh",
      duration: "Full Semester (14 weeks)",
      students: "30-40 students",
      description: "An intensive course exploring future design scenarios through immersive technologies, speculative design, and creative prototyping. Students develop skills in conceptualizing and visualizing future mobility and interaction paradigms.",
      image: "https://images.unsplash.com/photo-1761122912306-13d8f83892c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjByZXNlYXJjaCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI5NTYxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      topics: ["Speculative Design", "Future Scenarios", "Digital Prototyping", "Design Research Methods"],
    },
    {
      title: "Concept Ideation in VR",
      instructor: "Priya Sharma",
      duration: "8 weeks",
      students: "20-25 students",
      description: "Hands-on workshop focusing on virtual reality as a design tool. Students learn to ideate, sketch, and prototype concepts directly in immersive VR environments using industry-standard tools and platforms.",
      image: "https://images.unsplash.com/photo-1758598303762-56c85bef2496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjBkaWdpdGFsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI5NTYxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      topics: ["VR Design Tools", "3D Sketching", "Spatial Design", "Immersive Prototyping"],
    },
    {
      title: "Immersive Art in VR",
      instructor: "Vikram Patel",
      duration: "6 weeks",
      students: "15-20 students",
      description: "Exploring the intersection of art and technology through virtual reality. Students create immersive artistic experiences, learn creative coding for VR, and develop interactive installations.",
      image: "https://images.unsplash.com/photo-1758598303762-56c85bef2496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbW1lcnNpdmUlMjBkaWdpdGFsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI5NTYxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      topics: ["Creative Coding", "Interactive Art", "VR Experiences", "Installation Design"],
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl text-[#003153] mb-4">Courses & Learning</h1>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6"></div>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto">
            DEF Lab offers specialized courses in future design, virtual reality, and immersive technologies, combining theoretical foundations with hands-on practice.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all group flex flex-col"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl text-[#003153] mb-3">{course.title}</h3>

                {/* Course Meta */}
                <div className="space-y-2 mb-4 text-sm text-[#666666]">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-[#FF6600]" />
                    <span>Instructor: {course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#FF6600]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-[#FF6600]" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#666666] leading-relaxed mb-4">{course.description}</p>

                {/* Topics */}
                <div className="mt-auto">
                  <p className="text-sm text-[#003153] mb-2">Topics Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="text-xs bg-[#7DF9FF]/20 text-[#003153] px-3 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button className="mt-6 w-full py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#FF6600]/90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Approach Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl text-[#003153]">Our Teaching Philosophy</h2>
            <p className="text-[#666666] leading-relaxed">
              At DEF Lab, we believe in learning by doing. Our courses combine theoretical knowledge with extensive hands-on practice using state-of-the-art equipment and tools.
            </p>
            <p className="text-[#666666] leading-relaxed">
              Students work on real-world projects, collaborate with industry partners, and have access to our full range of VR equipment, 3D printers, and simulation tools.
            </p>
            <ul className="space-y-3 text-[#666666]">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#FF6600] rounded-full mt-2 flex-shrink-0"></span>
                <span>Project-based learning with real industry applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#FF6600] rounded-full mt-2 flex-shrink-0"></span>
                <span>Access to cutting-edge VR and prototyping facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#FF6600] rounded-full mt-2 flex-shrink-0"></span>
                <span>Mentorship from experienced researchers and industry experts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#FF6600] rounded-full mt-2 flex-shrink-0"></span>
                <span>Interdisciplinary collaboration opportunities</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1759092912891-9f52486bb059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NzI5NTYxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Lab Learning Environment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-[#FF6600]/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}