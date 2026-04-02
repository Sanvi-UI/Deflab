import { User } from "lucide-react";

export function Team() {
  const teamCategories = [
    {
      category: "Professors",
      members: [
        {
          name: "Dr. Lalit Das",
          role: "Faculty",
          specialization: "Design Research",
        },
        {
          name: "Sugunith Malhotra",
          role: "Researcher",
          specialization: "Design & Technology",
        },
      ],
    },
    {
      category: "PhD Researchers",
      members: [
        {
          name: "Nabajit Deka",
          role: "PhD Candidate",
          specialization: "Research",
        },
        {
          name: "Shivam Vats",
          role: "PhD Candidate",
          specialization: "Research",
        },
        {
          name: "Krishnan Unni",
          role: "PhD Candidate",
          specialization: "Research",
        },
      ],
    },
    {
      category: "Staff",
      members: [
        {
          name: "Dhiraj Boro",
          role: "Staff",
          specialization: "Lab Operations",
        },
        {
          name: "Piyush Soni",
          role: "Staff",
          specialization: "Technical Support",
        },
      ],
    },
    {
      category: "Interns",
      members: [
        {
          name: "Rimam Fujita (M.des)",
          role: "Research Intern",
          specialization: "Design Research",
        },
        {
          name: "Ayush Jain",
          role: "Intern",
          specialization: "Design & Technology",
        },
        {
          name: "Ayushman",
          role: "Intern",
          specialization: "Design & Technology",
        },
        {
          name: "Radhika",
          role: "Intern",
          specialization: "Design & Technology",
        },
      ],
    },
    {
      category: "Exchange Students",
      members: [
        {
          name: "Exchange Student 1",
          role: "Exchange Student",
          specialization: "International Exchange Program",
        },
        {
          name: "Exchange Student 2",
          role: "Exchange Student",
          specialization: "International Exchange Program",
        },
      ],
    },
    {
      category: "Alumni",
      members: [
        {
          name: "Ex. Mehul Chaudari",
          role: "Former Intern",
          specialization: "Alumni",
        },
        {
          name: "Ex. Aishitgya K R",
          role: "Former Intern",
          specialization: "Alumni",
        },
      ],
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl text-[#003153] mb-4">Meet Our Team</h1>
          <div className="w-24 h-1 bg-[#FF6600] mx-auto mb-6"></div>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto">
            A diverse group of researchers, designers, and innovators working together to shape the future of design and technology.
          </p>
        </div>

        {/* Team Categories */}
        <div className="space-y-16">
          {teamCategories.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Category Title */}
              <h2 className="text-3xl text-[#003153] mb-8 pb-3 border-b-2 border-[#7DF9FF]">
                {category.category}
              </h2>

              {/* Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                  >
                    {/* Photo */}
                    <div className="aspect-square overflow-hidden bg-gray-100 flex items-center justify-center">
                      <User className="w-20 h-20 text-gray-400 mx-auto" />
                    </div>

                    {/* Info */}
                    <div className="p-6 text-center">
                      <h3 className="text-lg text-[#003153] mb-1">{member.name}</h3>
                      <p className="text-sm text-[#FF6600] mb-2">{member.role}</p>
                      <p className="text-sm text-[#666666]">{member.specialization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 text-center p-12 bg-[#003153] rounded-xl text-white">
          <h2 className="text-3xl mb-4">Join Our Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for passionate researchers and designers. Check out our open positions and collaboration opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#FF6600]/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}